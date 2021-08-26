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

// function caminar(){
//     console.log('Estoy Caminando');
// }
// caminar();
// caminar();

// function contar (de, hasta){
//     console.log('Contando de '+ de + ' hasta '+ hasta);
// }

// contar(1,3);

// function sumar (num1, num2){
//     return num1+num2;
// }
// var total = sumar(1,2);
// console.log(total);

// console.log(typeof sumar);
// var yolo = sumar;
// var total2 = yolo(2,2);
// console.log(total2);


// // Funciones anonimas

// var password = function (num){
//     return num *4;

// }
// console.log(password(2));
// console.log(password(1));

// // IIFE

// (function (sonrisa){
//     var seguro = 'seguro ';
//     console.log('Esto es '+ seguro + sonrisa);
// })(':)');

// // caliback (llamada de vuelta

// function batman(edad){
//     console.log('Edad de Batman ' + edad);
// }

// function superman(func){
//     console.log('Edad de superman 40');
//     func(39);
// }

// superman(batman);

// // Objetos

// var persona = {
//     nombre: 'steven',
//     pasos: 0,
//     hablar: function (){
//         console.log(this.nombre + ' Esta hablando...');
//     },
//     caminar: function caminar(){
//         this.pasos++;
//         console.log(this.nombre + ' Esta caminando--- ' + this.pasos + ((this.pasos > 1) ? ' pasos' : ' paso'));
//     },
//     detener: function detener(){
//         console.log(this.nombre + ' esta congelado :)');
//     }
// }

// persona.hablar();
// persona.caminar();
// persona.detener();
// persona.caminar();

// *******************************ensayo*****************

var hora;
hora = 3;
// if ((hora >= 4) && (hora <= 11)){
//   console.log("Buenos dias");
// }else if((hora >= 12)&&(hora <= 13)){
//   console.log("Feliz almuerzo");
// }else if ((hora >= 14)&&(hora <= 17)){
//   console.log("Buenas tardes");
// }else{
//   console.log("Buenas noches");
// }

// var hora;
// hora = 3;
// switch (true){
//   case (hora >= 4) && (hora <= 11):
//   console.log("Muy buenos dias");
//   break;
//   case (hora >= 12)&&(hora <= 13):
//   console.log("Feliz almuerzo");
//   break;
//   case (hora >= 14)&&(hora <= 17):
//   console.log("Buenas tardes");
//   break;
//   default:
//   console.log("Buenas noches");  
// }
// var militar = 11;
// console.log("**********************")
// militar = militar == 11 ? "hola":"no es"
// console.log(militar);
// console.log("*********************");
// var d_nac;
// var mes_nac;

// d_nac = 25;
// mes_nac = 11;
// if (d_nac >= 21 && mes_nac == 3 || d_nac <= 20 && mes_nac == 4){
//   console.log("Signo Aries");
// }
// else if (d_nac >= 21 && mes_nac == 4 || d_nac <= 20 && mes_nac == 5){
//   console.log("Signo Tauro");
// }
// else if (d_nac >= 21 && mes_nac == 5 || d_nac <= 21 && mes_nac == 6){
//   console.log("Signo Geminis");
// }
// else if (d_nac >= 22 && mes_nac == 6 || d_nac <= 22 && mes_nac == 7){
//   console.log("Signo Cancer");
// }
// else if (d_nac >= 23 && mes_nac == 7 || d_nac <= 23 && mes_nac == 8){
//   console.log("Signo Leo");
// }
// else if (d_nac >= 24 && mes_nac == 8 || d_nac <= 22 && mes_nac == 9){
//   console.log("Signo Virgo");
// }
// else if (d_nac >= 23 && mes_nac == 9 || d_nac <= 22 && mes_nac == 10){
//   console.log("Signo Libra");
// } 
// else if (d_nac >= 23 && mes_nac == 10 || d_nac <= 22 && mes_nac == 11){
//   console.log("Signo Escorpio");
// } 
// else if (d_nac >= 23 && mes_nac == 11 || d_nac <= 21 && mes_nac == 12){
//   console.log("Signo Sagitario");
// } 
// else if (d_nac >= 22 && mes_nac == 12 || d_nac <= 20 && mes_nac == 1){
//   console.log("Signo Capricornio");
// } 
// else if (d_nac >= 21 && mes_nac == 1 || d_nac <= 19 && mes_nac == 2){
//   console.log("Signo Acuario");
// } 
// else if (d_nac >= 20 && mes_nac == 2 || d_nac <= 20 && mes_nac == 3){
//   console.log("Signo Piscis");
// } 

// var uno = 40;
// var dos = 20;


// // while(uno >= 20){
// //   console.log(uno);
// //   uno--;
// // }

// // do{
// //     console.log(uno);
// //     uno--;
// // }while(uno >= 20)

// for (var i = 1; i<=10; i++){
//     if (i == 5 || i == 8){
//         continue;
//     }
//     console.log(i);
// }

// function uno(){
    
// }

// var condicion = false;
// while(condicion == true){
//     console.log("hola");

// }

// hola esto es un ensayo