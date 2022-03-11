var nombre = "Juan Diego Gómez";
var altura = 185;

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