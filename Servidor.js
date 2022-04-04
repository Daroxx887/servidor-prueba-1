const http = require("http");
const host = "localhost";
const port = 8989;

var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/calculadora", calculadora);
app.get("/textos", textos);
app.get("/planetas", planetas);
app.get("/poligonos", poligonos);
app.get("/pizarra", pizarra);

function inicio(request, response)
{
    response.sendfile("Inicio.html");
}

function calculadora(request, response)
{
    response.sendfile("Calculadora.html");
}

function textos(request, response)
{
    response.sendfile("Creador de textos.html");
}

function planetas(request, response)
{
    response.sendfile("Definir tu peso en otros planetas.html");
}

function poligonos(request, response)
{
    response.sendfile("Dibujo en canvas dinamico.html");
}

function pizarra(request, response)
{
    response.sendfile("Pizarra.html");
}

app.listen(8989);