const express = require ('express');
const a = express();
const mongoose = require ('mongoose');
let puerto = 3000;
let consecionaria = [
    {
    Fila : "1",
    Tipo : "Auto",
    Marca : "Fiat",
    Modelo : "Mobi",
    Color : "Rojo",
    Año : "2019",
    Kilometros : "55.000 KM",
    },
    {
    Fila : "2",
    Tipo : "Camioneta",
    Marca : "RAM",
    Modelo : "RAM 1500 TRX Warlord",
    Color : "Negro",
    Año : "2021",
    Kilometros : "25.000 KM",
    },
    {
    Fila : "3",
    Tipo : "Camioneta",
    Marca : "For",
    Modelo : "Raptor",
    Color : "Azul",
    Año : "2020",
    Kilometros : "45.000 KM",
    },
    {
    Fila : "4",
    Tipo : "Auto",
    Marca : "Fiat",
    Modelo : "Cronos",
    Color : "Vino",
    Año : "2018",
    Kilometros : "65.000 KM",
    },
    {
    Fila : "5",
    Tipo : "Moto",
    Marca : "Honda",
    Modelo : "XR250 Tornado",
    Color : "Rojo",
    Año : "2023",
    Kilometros : "2.000 KM",
    }
    ];
    a.get('/', (req, res) => {
        res.send(consecionaria);
    });
    mongoose.connect("mongodb+srv://chtello:ct252555@cluster0.b8wvqso.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('se ha podido conectar exitosamente'))
    .catch(()=>console.log("Ha surgido un error"));
    a.listen(puerto);