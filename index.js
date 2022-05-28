const express = require('express');
const multer  = require('multer');
const bodyParser= require('body-parser');
const upload = multer({ dest: './public/data/uploads/' });

const app = express();

//Punto de entrada, ruta, route, para el URL raiz, con el metodo GET.

//Request -> solicitud -> parametros -> argumentos

//Reponse -> respuesta -> resultado.
app.use(bodyParser());

//Routes Del Caso De Uso
//require('./src/routes/uc1/uc1.routes')(app);
//require('./src/routes/uc2/uc2.routes')(app);
require('./src/routes/voces/voz.routes')(app);



//const uc1 = require('./src/uc1/uc1.routes');
//uc1(app); 

app.listen(3000);