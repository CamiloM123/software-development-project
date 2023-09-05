//Importar librerias
const mongoose = require("mongoose")
const express = require("express")


//Importar archivos
const { DB_HOST, DB_PASSWORD, DB_USER, IP_SERVER, API_VERSION, PORT} = require("./config")
const app = require("./app");

// mongodb+srv://camilo_m123:<password>@cluster0.smzqsb3.mongodb.net/
const connection_string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`

//Conexión a la base de datos
mongoose
    .connect(connection_string)
    .then( () => {
        console.log("Conexión exitosa")
        //Apertura del puerto por el cual correra el proyecto
        app.listen(PORT, () => {
        console.log(`IP_SERVER:\nhttp://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
        });
    })
    .catch( (err) => console.error(err));       

