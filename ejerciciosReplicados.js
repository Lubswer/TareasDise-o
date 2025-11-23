/*

Lubswer Catagña
Tarea replicar - Ejercicios de JavaScript

*/

// 28. IF ELSE anidado: Clasificar Edad
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad < 18) {
  console.log("Eres menor de edad.");
} else {
  if (edad < 65) {
    console.log("Eres un adulto.");
  } else {
    console.log("Eres un adulto mayor.");
  }
}

// 29. IF múltiple: Clasificar nota
let nota = parseInt(prompt("Introduce tu nota (1-10): "));
if (nota >= 1 && nota <= 4) {
  console.log("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
  console.log("Regular");
} else if (nota >= 7 && nota <= 8) {
  console.log("Bueno");
} else if (nota >= 9 && nota <= 10) {
  console.log("Excelente");
} else {
  console.log("Nota inválida");
}

// 30. Switch: Menú de operaciones básicas
let a = parseFloat(prompt("Ingrese número 1:"));
let b = parseFloat(prompt("Ingrese número 2:"));
let opcion = prompt("Elija operación:\n1-Suma\n2-Resta\n3-Multiplicación\n4-División\n5-Módulo\n6-Potencia");
switch (opcion) {
  case "1":
    console.log("Suma:", a + b);
    break;
  case "2":
    console.log("Resta:", a - b);
    break;
  case "3":
    console.log("Multiplicación:", a * b);
    break;
  case "4":
    if (b !== 0) console.log("División:", a / b);
    else console.log("No se puede dividir por cero");
    break;
  case "5":
    console.log("Módulo:", a % b);
    break;
  case "6":
    console.log("Potencia:", a ** b);
    break;
  default:
    console.log("Opción inválida");
}

// 31. While: Suma de vector
let i = 0;
let suma = 0;
let v = [1, 2, 3, 4];
while (i < v.length) {
  suma += v[i];
  i++;
}
console.log(suma);

// 32. While: Contador
let contador = 0;
while (contador < 3) {
  console.log("Contador es igual a:", contador);
  contador++;
}

// 34. While + Switch: Menú cíclico
let opt;
do {
  opt = prompt("Menú:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Salir\nElige una opción:");
  switch (opt) {
    case "1":
      console.log("Sumar");
      break;
    case "2":
      console.log("Restar");
      break;
    case "3":
      console.log("Multiplicar");
      break;
    case "4":
      console.log("Salir");
      break;
    default:
      console.log("Opción inválida");
  }
} while (opt !== "4");

// 35. Do While: Suma de números con confirmación
let suma35 = 0, continuar;
do {
  suma35 += parseInt(prompt("Ingrese un número:"));
  continuar = prompt("¿Desea continuar? (si/no)");
} while (continuar.toLowerCase() === "si");
console.log("La suma total es:", suma35);
// Validar contraseña
let pass;
do {
  pass = prompt("Ingrese una contraseña con al menos 6 caracteres:");
} while (!pass || pass.length < 6);
console.log("Contraseña válida");

// 36. For: Números del 1 al 10
for(let i=1; i<=10; i++){
  console.log(i);
}

// 37. For: Números pares del 1 al 20
for(let i=1; i<=20; i++){
  if(i%2===0) console.log(i);
}

// 38. For: Suma de 1 a 100
let suma38 = 0;
for(let i=1; i<=100; i++){
  suma38 += i;
}
console.log("Suma de 1 a 100:", suma38);

// 39. For: Promedio de 5 números
let suma39 = 0;
for(let i=1;i<=5;i++){
  suma39 += parseFloat(prompt("Número "+i+":"));
}
console.log("Promedio:", suma39/5);

// 41. For: Tabla de multiplicar elegida por el usuario
let n41 = parseInt(prompt("¿De qué número quieres la tabla?"));
for(let i=1; i<=10; i++){
  console.log(`${n41} x ${i} = ${n41*i}`);
}

// 46. For: Contar vocales en una palabra
let palabra = prompt("Ingrese una palabra:").toLowerCase();
let vocales = 0;
for(let i=0; i<palabra.length; i++){
  if("aeiou".includes(palabra[i]))
    vocales++;
}
console.log("Cantidad de vocales:", vocales);

// 48. For: Invertir cadena
let texto = prompt("Escribe una palabra:");
let invertida = "";
for(let i=texto.length-1; i>=0; i--){
  invertida += texto[i];
}
console.log(invertida);

// 54. Función: Factorial
function factorial(n) {
  let f = 1;
  for(let i=1; i<=n; i++)
    f *= i;
  return f;
}
console.log(factorial(5)); // Ejemplo

// 55. Función: Fibonacci
function fibonacci(max) {
  let a = 0, b = 1, serie = [0];
  while(b <= max) {
    serie.push(b);
    [a, b] = [b, a + b];
  }
  return serie;
}
console.log(fibonacci(1597));

// 56. Función tipo declaración y llamada
function suma56(x, y) {
  return x + y;
}
console.log(suma56(5,7));

// 58. Funciones flecha
let imprimir = texto => console.log(texto);
imprimir("Hola mundo");
let sumar = (a,b) => a + b;
console.log(sumar(2,3));

// 59. Uso de parámetros rest
function suma59(...numeros) {
  return numeros.reduce((acum, num) => acum + num, 0);
}
console.log(suma59(1,2,3,4,5)); // 15

// 60. Desestructuración de objetos
let persona60 = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Quito"
};
const {nombre, edad} = persona60;
console.log(nombre, edad);

// 61. Desestructuración de arrays
let [a61, b61, c61] = [1, 2, 3];
console.log(a61, b61); // 1 2

// 62. Métodos y JSON
let persona62 = { nombre: "Ana", edad: 24 };
let json = JSON.stringify(persona62);
let obj = JSON.parse(json);
console.log(obj.nombre);

// 63. Try-Catch: Manejo de errores
try {
  let num = parseInt(prompt("Ingresa un número:"));
  if(isNaN(num)) throw "No es un número";
  console.log("Número ingresado:", num);
} catch(e) {
  console.log("Error:", e);
}

// 64. Clase Persona y método
class Persona64 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
let p1 = new Persona64("Luis", 24);
p1.saludar();

// 65. Prototipos y función constructora
function Auto(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}
Auto.prototype.saludar = function() {
  console.log(`Soy un ${this.marca} modelo ${this.modelo}`);
}
let car = new Auto("Toyota", "Hilux");
car.saludar();

// 66. for...of y for...in
let arr = [10, 20, 30];
for(let val of arr) {
  console.log(val); // Accede a valores
}
let obj = {a: 1, b: 2};
for(let key in obj) {
  console.log(key, obj[key]); // Accede a claves y valores
}
