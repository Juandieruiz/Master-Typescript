// EcmaScript 2022 / ES12 / ES.NEXT

// Variables: var, let, const
// Contenedor de información, caja para guardar un dato

var box = 'Hello from the console in JavaScript';

function showName(){
    var box = 'Hello User'
    var name = 'Juan Diego Gómez'
    console.log("in function: " + box);
    console.log("in function: " + name);

}

showName();

console.log("out function: " + box);

// LET: ambíto de bloque
let country = 'Spain';

function showCountry(){
    console.log(country)
}

showCountry();

if(country == 'Spain'){
    let continent = 'Europe';
    console.log(continent);
}

console.log(continent);
