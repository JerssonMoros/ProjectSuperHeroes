const express = require('express')
const app = express()
const mysql = require('mysql2');

// cors

const cors = require('cors');
var corsOptions = {
   orogin: '*',
   optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'superheroes',
   port: 3306
});
connection.connect((error) => {
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
      

   }
});

app.get('/heroe', (req, res) => {
   // Establecer la conexión a la base de datos
   connection.connect((error) => {
      if (error) {
         res.status(500).json({ error: 'Error de conexión a la base de datos' });
      } else {
         // Ejecutar la consulta SELECT
         connection.query('SELECT * FROM heroes', (error, results, fields) => {
            if (error) {
               res.status(500).json({ error: 'Error al ejecutar la consulta' });
            } else {
               res.json(results); // Devolver los resultados como respuesta JSON
            }

         });
      }
   });
});

app.get('/heroes', (req, res) => {
   // Establecer la conexión a la base de datos
   connection.connect((error) => {
      if (error) {
         res.status(500).json({ error: 'Error de conexión a la base de datos' });
      } else {
         // Ejecutar la consulta SELECT
         connection.query('SELECT * FROM heroes', (error, results, fields) => {
            if (error) {
               res.status(500).json({ error: 'Error al ejecutar la consulta' });
            } else {
               res.json(results); // Devolver los resultados como respuesta JSON
            }

         });
      }
   });
});

app.get('/heroes', (req, res) => {
   // Establecer la conexión a la base de datos
   connection.connect((error) => {
      if (error) {
         res.status(500).json({ error: 'Error de conexión a la base de datos' });
      } else {
         // Ejecutar la consulta SELECT
         connection.query('SELECT * FROM heroes', (error, results, fields) => {
            if (error) {
               res.status(500).json({ error: 'Error al ejecutar la consulta' });
            } else {
               res.json(results); // Devolver los resultados como respuesta JSON
            }

         });
      }
   });
});

app.delete('/heroes/:id', (req, res) => {
   const idHeroe = req.params.id;

   // Establecer la conexión a la base de datos
   connection.connect((error) => {
      if (error) {
         res.status(500).json({ error: 'Error de conexión a la base de datos' });
      } else {
         // Ejecutar la consulta DELETE
         const query = 'DELETE FROM heroes WHERE id_heroe = ?';
         connection.query(query, [idHeroe], (error, results, fields) => {
            if (error) {
               res.status(500).json({ error: 'Error al ejecutar la consulta' });
            } else {
               res.json({ message: 'Heroe eliminado correctamente' });
            }

         });
      }
   });
});

app.use(express.json());

app.post('/heroes', (req, res) => {
   const { nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen } = req.body;

   // Establecer la conexión a la base de datos
   connection.connect((error) => {
      if (error) {
         res.status(500).json({ error: 'Error de conexión a la base de datos' });
      } else {
         // Ejecutar la consulta INSERT
         const query = 'INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen) VALUES (?, ?, ?, ?, ?)';
         connection.query(query, [nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen], (error, results, fields) => {
            if (error) {
               res.status(500).json({ error: 'Error al crear el superhéroe' });
            } else {
               res.json({ message: 'Superhéroe creado correctamente' });
            }

         });
      }
   });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
    console.log('No encontro nada')
});

  

app.listen(3000)