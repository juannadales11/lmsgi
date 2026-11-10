let alumno = "Juan"; //inicilización de variables
let edad = 18; // inicialización de variable
let nombre; // declaración de variable sin inicialización
console.log(alumno, edad, "nombre"); // imprime en consola el valor de las variables
edad = 19; // asignación de un valor nuevo a la variable edad
console.log("Nueva edad:", edad);
console.log(typeof alumno, typeof edad); // se utiliza el operador typeof 
                                         // para conocer el tipo de datos de las
                                         // variables                                                                                   
const PRECIO_BOCADILLO = 3.5;
const PRECIO_ZUMO = 1.5;
PRECIO_ZUMO = 4.0;
console.log("Bocadillo:", PRECIO_BOCADILLO, "Zumo", PRECIO_ZUMO);    

const CURSO = "1º ASIR";
const MATRICULADO = true;
let tutor;
const AULA = null;
console.log(typeof CURSO, typeof EDAD, typeof MATRICULADO,
     typeof TUTOR, typeof AULA)

//==== Paso 5: operadores aritméticos ======= \\
let bocadillos = 2;
let zumos = 1;
const SUBTOTAL = bocadillos * PRECIO_BOCADILLO + zumos * PRECIO_ZUMO;
console.log("Subtotal:", subtotal);
console.log(10+4 * 2,(10 + 4) * 2);
console.log("Resto de 17/5:", 16 % 5,)

//==== Paso 6: Textos y conversiones ======= \\
const saludo = "HOla, " + alumno;
console.log(saludo);
console.log('${alumno} tiene ${edad} años y estudia ${curso}"');