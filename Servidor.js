const http = require("http");
const host = "localhost";
const port = 8989;

var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/calculadora", calculadora);
app.get("/textos", textos);
app.get("/planetas", planetas);
app.get("/dibujo-geometrico", dibujoGeometrico);
app.get("/pizarra", pizarra);

function inicio(request, response)
{
    response.sendfile("index.html");
}

function calculadora(request, response)
{
    response.sendfile("calculadora.html");
}

function textos(request, response)
{
    response.sendfile("creador_de_textos.html");
}

function planetas(request, response)
{
    response.sendfile("definir_tu_peso_en_otros_planetas.html");
}

function dibujoGeometrico(request, response)
{
    response.sendfile("dibujo_geometrico.html");
}

function pizarra(request, response)
{
    response.sendfile("pizarra.html");
}

app.listen(8989);