const express = require('express')
const bodyParser  = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//require('dotenv').config()
const port =  3005

//motor plantillas

app.set('view engine','ejs' )
app.set('views',__dirname+'/views')

//Conexión a base de datos
//const mongoose = require('mongoose');
//mongoose.set('strictQuery', true)
/*const user = 'cursonode';
const password = 'wDT3pcDGPPmRzAoo';
const dbname = 'dbpokemon';
se ha de crear un archivo env para cojer los datos 
*/


//ruta middel 
app.use(express.static(__dirname+'/public'));


   // llamadas a las rutas 
   app.use('/',require('./router/rutas'))

//entrenador en ruta
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
