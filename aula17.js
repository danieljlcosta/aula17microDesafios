console.log("---- MAP----"); // USADO PARA PERCORRER AS VARIAVEIS

let numeros = [2, 4, 6]
let dobro = numeros.map( function(num) {
    return num /2;
});

console.log(dobro);

console.log("-----FILTER----"); // REALIZA UM LOOP DE ARRAY PARA FILTRAR

let idades = [22, 9, 15, 25, 30, 8, 16]
let maiores = idades.filter(function(idade){
    return idade > 18;
});
console.log(maiores);

let nomes = ["daniel", "maria", "jessica", "douglas", "joao"]
let iguais = nomes.filter(function(nome){
    return nome === "daniel";
});
console.log(iguais);

console.log("-----reduce----");// percorre o array e retorna um unico valor

let number = [1, 5, 4];

let soma = number.reduce(function(acumulador, number){
    console.log(acumulador, number);
    return acumulador + number;
});
console.log(soma);

console.log("----- forEach----");

var paises = ["Brasil", "Cuba", "Peru"]
paises.forEach(function(pais){
    console.log("Países de terceiro mundo são "+pais);
});

console.log("microDesafios");
console.log("-----1 MAP -----");
let pares = [2, 4, 5, 7, 8, 10, 12, 15]
let par = pares.map( function(num) {
    return num % 2 == 0;
});

console.log(par);
console.log("---- 2 Filter ----");

let exe = ["Maria", "João Borges", "Valdirene Silva", "Maria"]
let exem = exe.filter(function(escolher){
    return escolher == "Maria";
});
console.log(exem);

console.log("----3 reduce ----");

let numbers = [1, 5, 9, 3, 7];

let somas = numbers.reduce(function(acumulador, number){ 
    return acumulador + "-" + number;
});
console.log(somas);

console.log("-----4 forEach-----");
//Exercicio 4
let animais = ["Labrador", "Pitbul", "Pastor Alemão", "Bulldog"];
animais.forEach(function(animal){
    console.log(animal+" é uma raça de cachorro.");
});