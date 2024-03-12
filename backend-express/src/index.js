
const express = require('express');
const cors = require('cors');

const mysql = require('mysql2/promise');
require('dotenv').config()

const bcrypt = require('bcrypt');


// CREAR VARIABLES

const server = express();
const port = 3000;        // 1025 - 65365

// http://   localhost : 3000  / path ...

// CONFIGURACIÓN

server.use( cors() );
server.use(express.json({ limit: '25mb' }));


// CONFIGURACIÓN DE MYSQL

async function getConnection() {

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_SCHEMA,
  });

  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}


// ARRANCAR EL SERVIDOR

server.listen(port, () => {
  console.log(`Servidor iniciado escuchando en http://localhost:${port}`);
});

// ENDPOINTS

//   GET   http://localhost:3000   /api/pets

//   GET http://localhost:3000/api/pets ? name = Lolo & order = name

server.get('/api/pets', async (req, res) => {

  console.log('req.query: ',req.query);   // --> { name: 'Lolo' }

  // Connectar con la base de datos

  const conn = await getConnection();

  if( !req.query.search && !req.query.order ) {
    console.log('Sin params');
    // Lanzar un SELECT
  
    const queryGetPets = `
    SELECT pets.*, vetes.name vet_name
    FROM pets
      LEFT JOIN vetes ON (pets.fkVetes = vetes.id)
    `;
  
    const [results] = await conn.query(queryGetPets);
   
    // Recuperar los datos
    
    //console.log(results);
  
    // Cerramos la conexion
  
    conn.close();
  
    res.json({info:"nada", results: results});
  }
  else {
    const order = req.query.order === 'name' ? 'ORDER BY pets.name ASC' : 'ORDER BY pets.reg_date ASC';

    // Lanzar un SELECT
  
    const queryGetPets = `
    SELECT pets.*, vetes.name vet_name
    FROM pets
      LEFT JOIN vetes ON (pets.fkVetes = vetes.id)
    WHERE LOWER(pets.name) LIKE LOWER(?)
    ${order}
    `;
  
    const [results] = await conn.query(queryGetPets, ['%'+req.query.search+'%']);
  
    // Cerramos la conexion
  
    conn.close();
  
    res.json({info:"nada", results: results});
  }

  
});


server.post('/api/pets', async (req, res) => {

  console.log('req.body:', req.body);

  const {name, species, image, desc, reg_date} = req.body;

  if( !name || name === '' ) {
    res.json(
      {
        success: false,
        error: 'Error el nombre no puede estar vacio'
      }
      );
    return;
  }
  
  try {
    const conn = await getConnection();

    const insertPets = `
    INSERT INTO pets
      (\`name\`,species,\`image\`,\`desc\`,\`reg_date\`)
    VALUES
      (?,?,?,?,?);
    `;
    
    const [results] = await conn.execute(insertPets, [name, species, image, desc, reg_date]);
    
    console.log(results);
    
    conn.end();
    
    res.json(
      {
        success: true,
        id: results.insertId
      }
      );
  }
  catch( error ) {
    res.json(
      {
        success: false,
        error: `Error en la base de datos (${error})`
      }
      );
  }
    
});


server.put('/api/pets', (req, res) => {

  console.log('req.body:', req.body);

  res.send('Not implemented')

});


server.delete('/api/pets', (req, res) => {

  console.log('req.body:', req.body);

  res.send('Not implemented')

});


// http://localhost:3000/api/pet/  12
// http://localhost:3000/api/pet/  23
// http://localhost:3000/api/pet/  1

server.get('/api/pet/:id', async (req, res) => {

  console.log('req.params:', req.params);

   // Connectar con la base de datos

   const conn = await getConnection();

   // Lanzar un SELECT
 
   const queryGetOnePet = `
     SELECT pets.*, vetes.name vet_name
     FROM pets
       LEFT JOIN vetes ON (pets.fkVetes = vetes.id)
     WHERE pets.id = ?
   `;

   const [results] = await conn.query(queryGetOnePet, [req.params.id] );

   // Cerramos la conexion

    conn.close();

    if( results.length === 0 ) {
      res.json( {success: false, error: 'No encontrado'} );
    }
    else {
      res.json( results[0] );
    }


});


server.post('/api/users', async (req, res) => {
  // Comprobamos que esté la usuaria
  console.log(req.body);

  if( !req.body.name ) {
    res.json({success:false, error: 'El nombre no puede estar vacio'});
    return;
  }

  if( req.body.name.length < 3 ) {
    res.json({success:false, error: 'El nombre es demasiado corto'});
    return;
  }

  if( !req.body.user ) {
    res.json({success:false, error: 'El nombre de usuaria no puede estar vacio'});
    return;
  }

  if( req.body.user.length < 4 ) {
    res.json({success:false, error: 'El nombre de usuaria es demasiado corto'});
    return;
  }

  if( req.body.user.includes(' ') ) {
    res.json({success:false, error: 'El nombre de usuaria no puede contener espacios'});
    return;
  }


  if( !req.body.pass ) {
    res.json({success:false, error: 'La contraseña no puede estar vacia'});
    return;
  }

  if( req.body.pass.length < 8 ) {
    res.json({success:false, error: 'La contraseña debe tener como mínimo 8 caracteres'});
    return;
  }

  if( !/\d/.test(req.body.pass) ) {
    res.json({success:false, error: 'La contraseña debe tener algún dígito'});
    return;
  }

  if( /^[\d|\w]+$/.test(req.body.pass) ) {
    res.json({success:false, error: 'La contraseña debe tener algún símbolo'});
    return;
  }

  // Comprobar si hay una usuaria con el mismo user

  const conn = await getConnection();

  const queryCheckUser = `
  SELECT *
    FROM users
    WHERE user = ?
  `;

  const [results] = await conn.query(queryCheckUser, [req.body.user]);

  if( results.length > 0 ) {
    res.json({success:false, error: 'Ese nombre de usuaria ya existe'});

    conn.end();
    return;
  }

  const insertNewUser = `
  INSERT INTO users (name, user, pass)
    VALUES (?, ?, ?);
  `;

  const crypedPass = await bcrypt.hash( req.body.pass, 10 );

  const [insertResults] = await conn.execute(insertNewUser, [req.body.name, req.body.user, crypedPass]);

  console.log(insertResults);

  conn.end();

  if( insertResults.affectedRows === 1 ) {
    res.send({success: true});
  }
  else {
    res.send({success: false});
  }
  

});

// SERVIDOR ESTÁTICOS

server.use( express.static('./public') );