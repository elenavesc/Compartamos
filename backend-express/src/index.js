const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require('cors')

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors())

const validateUser = (hash, password) => {
  bcrypt
    .compare(password, hash)
    .then((res) => {
      console.log(res); 
    })
    .catch((err) => console.error(err.message));
}

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

const authenticateToken = (req, res, next) => {
  const token = req.get("Authorization");

  if (!token)
    return res.status(403).json({error: "Unauthorized"})

  try {
    decoded_token = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.token_data = decoded_token
  } catch (error) {
    console.log(error)
    return res.status(403).json({error: "Unauthorized"})
  }
  
  next()
}

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World" });
});

app.post("/register", async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;

  if (!email || !password)
    return res.status(400).json({ error: "Faltan parametros" });

  const passwordHash = await bcrypt.hash(req.body?.password, 10);

  newUser = new User({ email: email, password: passwordHash });

  try {
    await newUser.save();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Este usuario ya existe" });
  }

  const token = generateToken({ email: newUser.email, name: newUser.name, id: newUser.id });

  return res.json({ token: token });
});

app.post("/login", async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;

  if (!email || !password)
    return res.status(400).json({ error: "Faltan parametros" });

  const user = await User.findOne({ email: email });
  const passwordHash = await bcrypt.hash(password, 10);

  if (validateUser(passwordHash, password)) {
    console.log(passwordHash);
    console.log(user.password);
    return res.status(403).json({ error: "La contraseña es incorrecta" });
  }

  const token = generateToken({ email: user.email, name: user.name });

  return res.json({ token: token });
});

app.post("/profile", authenticateToken, async (req, res) => {
  const name = req.body?.name;
  const address = req.body?.address;
  const birthdate = req.body?.birthdate;

  if (!name || !address || !birthdate)
    return res.status(400).json({ error: "Faltan parametros" });


  const token_email = res.locals.token_data.email
  await User.updateOne({ email: token_email }, {
    name: name,
    address: address,
    birthdate: new Date(birthdate)
  });

  return res.status(200).json({message: 'OK'});

});

app.get("/profile", authenticateToken, async (req, res) =>{
  req.get("Authorization")
  
  const token_data = res.locals.token_data
  
  const user = await User.findOne({"email": token_data.email})
  console.log(user)
  return res.json({
    "name": user.name,
    "birthdate": user.birthdate,
    "address": user.address
  })
})

// app.put("/api/logout", function (req, res) {
//   const authHeader = req.headers["authorization"];
//   jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
//      if (logout) {
//         res.send({msg : 'Has sido desconectado' });
//      } else {
//         res.send({msg:'Error'});
//      }
//   });
// });


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
