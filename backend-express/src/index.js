const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();
app.use(express.json());

function validateUser(hash, password) {
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

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World" });
});

app.post("/register", async (req, res) => {
  const name = req.body?.name;
  const email = req.body?.email;
  const password = req.body?.password;

  if (!name || !email || !password)
    return res.status(400).json({ error: "Faltan parametros" });

  const passwordHash = await bcrypt.hash(req.body?.password, 10);

  newUser = new User({ name: name, email: email, password: passwordHash });

  try {
    await newUser.save();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Este usuario ya existe" });
  }

  const token = generateToken({ email: newUser.email, name: newUser.name });

  return res.json({ token: token });
});

app.post("/login", async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;

  const user = await User.findOne({ email: email });

  if (!email || !password)
    return res.status(400).json({ error: "Faltan parametros" });

  const passwordHash = await bcrypt.hash(password, 10);

  if (validateUser(passwordHash, password)) {
    console.log(passwordHash);
    console.log(user.password);
    return res.status(403).json({ error: "La contraseña es incorrecta" });
  }

  const token = generateToken({ email: user.email, name: user.name });

  return res.json({ token: token });
});


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
