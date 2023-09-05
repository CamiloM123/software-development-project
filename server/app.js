// Importación de librerias
const bodyParser = require("body-parser")
const express = require("express")
const multer = require("multer")

const addressRoutes = require("./controllers/address")
const userRoutes = require("./routes/users")
const clientRoutes = require("./routes/clients")
const categoryRoutes = require("./routes/categories")
const serviceRoutes = require("./routes/services")

// Importación de archivos
const {API_VERSION} = require("./config")


//Inicialización de la aplicación
const app = express();

// Para la visualizacion del contenido del endpoint
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Configuración de cabeceras HTPP
app.use(`/api/${API_VERSION}/addresses`, addressRoutes);
app.use(`/api/${API_VERSION}/users`, userRoutes);
app.use(`/api/${API_VERSION}/clients`, clientRoutes);
app.use(`/api/${API_VERSION}/categories`, categoryRoutes);
app.use(`/api/${API_VERSION}/services`, serviceRoutes);

// Configuración static folder
// app.use(express.static("uploads"));
app.use('/uploads', express.static('uploads/service')) // Para que se pueda acceder a la carpeta uploads desde el navegador

module.exports = app;


