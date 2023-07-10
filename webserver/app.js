const express = require('express');
const mysql = require('mysql2/promise');
const config = require('./config');


const app = express();
app.use(express.json());

// cors

const cors = require('cors');
var corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const pool = mysql.createPool({
   host: config.host,
   user: config.user,
   password: config.password,
   database: config.database,
   port: config.port,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

app.use((req, res, next) => {
   req.db = pool;
   next();
 });

 // Medoto Get
app.get('/heroes', async (req, res) => {
   //Devuelve todos los elementos de la base de datos en la tabla heroes
   try {
      const [rows] = await req.db.query('SELECT * FROM heroes ORDER BY id_heroe DESC');
      res.json(rows);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
   }
});

app.get('/heroe/:id', async (req, res) => {
   const idHeroe = req.params.id;
   //filtra o busca un registro por su ID
   try {
      const [rows] = await req.db.query('SELECT * FROM heroes WHERE id_heroe = ?', [idHeroe]);
      res.json(rows);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
   }
});

app.delete('/heroes/:id', async (req, res) => {
   const idHeroe = req.params.id;
   //Elimina el registro de la base de datos
   try {
      const [rows] = await req.db.query('DELETE FROM heroes WHERE id_heroe = ?', [idHeroe]);
      res.json({ message: 'Heroe eliminado correctamente' });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
   }

});


app.post('/heroes', async (req, res) => {
   const { nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen } = req.body;
   // Crea el registro en la base de datos
   try {
      const [rows] = await req.db.query('INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen) VALUES (?, ?, ?, ?, ?)', 
      [nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen]);
      res.json({ message: 'Superhéroe creado correctamente' });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
   }
});

app.put('/heroes', async (req, res) => {
   const { id_heroe, nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen } = req.body;
   
   try {
     // Actualiza el registro en la base de datos
const result = await req.db.query(
       'UPDATE heroes SET nombre_heroe = ?, nombre_editorial = ?, alter_ego = ?, descripcion = ?, imagen = ? WHERE id_heroe = ?',
       [nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen, id_heroe]
     );
 
     // Verifica si se actualizó correctamente
     if (result[0].affectedRows == 1) {
       res.json({ message: 'Registro actualizado exitosamente' });
     } else {
       res.status(404).json({ error: 'Registro no encontrado' });
     }
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error en el servidor' });
   }
 });


app.get('*', (req, res) => {
   console.log('Error 404 | No se encontro nada')
});

  
app.listen(3000)