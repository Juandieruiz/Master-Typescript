var nombre = "Juan Diego Gómez";
var altura = 185;
/*
var concatenando = "Soy" + nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre} y mido ${altura}
`;

if(altura >= 185){
    datos.innerHTML += '<h1>Eres una persona ALTA </h1>'
}else{
    datos.innerHTML += '<h1>Eres una persona BAJITA </h1>'
}

for(var i = 2000; i <= 2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+ i;
}
*/

function muestraMiNombre(nombre, altura){
        var misDatos = `
            <h1> Soy la caja de datos </h1>
            <h2>Mi nombre es: ${nombre} y mido ${altura}
        `;

        return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("pepe", 180);
}

imprimir();

// array
var nombres = ['Juan','Diego', 'Luis'];
alert(nombres[1]);

// bucle for
document.write('<h1>Listado de Nombres</h1>')
for( i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}

// callback
nombres.forEach(function(index){
    document.write("<br>"+ index);
});