// var nombre = 'Hubiened';
// console.log(nombre, typeof nombre);
// var edad = 30;
// console.log(edad, typeof edad);
// var salario= 100.25;
// console.log(salario, typeof salario);
// console.log(edad % 1 === 0);
// console.log(salario % 1 === 0);
// var esmayor = false;
// console.log(esmayor, typeof esmayor);
// var mascota = null;
// console.log(typeof mascota);

// // Poner un texto a numero
// var numero ='1.5';
// var texto_a_numero = parseFloat(numero);
// console.log(texto_a_numero, typeof texto_a_numero);
// console.log(numero,typeof numero);
// console.log(numero, Number(numero));
// console.log(numero, parseFloat(numero));

// // Poner un numero a texto 
// var texto = numero.toString();
// console.log(texto);


// // Para pasar un decimal a un entero 
// var decimal = 3.9;
// var entero = parseInt(decimal);
// console.log(entero);
// if (1 === '1'){
//     console.log('si');

// } else{
//     console.log('no');
// }

// var nombre ='Hubiened';
// if (nombre.toLowerCase() === 'hubiened'){
//     console.log('si');

// }else {
//     console.log('no');
// }

// if (1 !== '1'){
//     console.log('si');
// }else{
//     console.log('no');
// }

// var fruta= 'naranja'
// if (fruta === 'naranja' || fruta === "mango") {
//     console.log('si');
// }else{
//     console.log('no');
// }

// var calificacion = 100;

// if (!calificacion < 70){
//     console.log('si');    
// } else{
//     console.log('no');
// }


// var poblacion = 50;

// if (poblacion <= 10){
// console.log('poblacion menor a 10');
// }else if(poblacion < 50){
//     console.log('poblacion menor a cincuenta');
// }else if (poblacion >= 50 ){
//     console.log('la poblacion es mayor a ciencuenta');
// }

// var hola = 1 === 1 ? ':)' : ':(';
// console.log(hola);

// var resultado = 2*3;
// var verdadero = resultado === 6 || ':o';
// console.log(verdadero);

// var resultado2 = 2*3;
// var verdadero2 = resultado2 === 6 && ':D';
// console.log(verdadero2);

// ************switch******************

// var mascota = 'Toby';

// switch (mascota){
//     case 'Toby':
//         console.log('Es toby');
//     break;
//     case 'paquita':
//         console.log('Es paquita');
//     break;
//     case 'spanki':
//         console.log('spanki ---');
//     break;
//     default:
//         console.log('No encontrado');
// }

// var poblacion = 50;

// switch (true) {
//     case (poblacion > 500):
//         console.log('Mayor a quinientos');
        
//         break;
//     case (poblacion === 500):
//         console.log('es igual a 500');
//         break;

//     default:
//         console.log('menor a 500');
//         break;
// }

// ****************Funciones******************

function caminar(){
    console.log('Estoy Caminando');
}
caminar();
caminar();

function contar (de, hasta){
    console.log('Contando de '+ de + ' hasta '+ hasta);
}

contar(1,3);

function sumar (num1, num2){
    return num1+num2;
}
var total = sumar(1,2);
console.log(total);

console.log(typeof sumar);
var yolo = sumar;
var total2 = yolo(2,2);
console.log(total2);


// Funciones anonimas

var password = function (num){
    return num *4;

}
console.log(password(2));
console.log(password(1));

// IIFE

(function (sonrisa){
    var seguro = 'seguro ';
    console.log('Esto es '+ seguro + sonrisa);
})(':)');

// caliback (llamada de vuelta

function batman(edad){
    console.log('Edad de Batman ' + edad);
}

function superman(func){
    console.log('Edad de superman 40');
    func(39);
}

superman(batman);

// Objetos

var persona = {
    nombre: 'steven',
    pasos: 0,
    hablar: function (){
        console.log(this.nombre + ' Esta hablando...');
    },
    caminar: function caminar(){
        this.pasos++;
        console.log(this.nombre + ' Esta caminando--- ' + this.pasos + ((this.pasos > 1) ? ' pasos' : ' paso'));
    },
    detener: function detener(){
        console.log(this.nombre + ' esta congelado :)');
    }
}

persona.hablar();
persona.caminar();
persona.detener();
persona.caminar();