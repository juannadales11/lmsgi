// función declarativa
function sumar(a, b = 0) {
  return a + b
}
//llamada a la función
let suma = sumar(2, 3) // 5
console.log(suma)
//función expresiva de tipo flecha
const sumaFlecha = (a, b = 0) => a + b
//llamada a la función
console.log(sumaFlecha(2))

// funcion expresiva de tipo flecha, con más de una linea
const sumaFlechaLineas = (a, b = 0) => {
  let resultado = a + b
  return resultado
}
//llamada a la función
console.log(sumaFlechaLineas(2, 3))

//callback
function sumarTodos(limite, accion) {
  for (let i = 0; i < limite; i++) {
    let resultado = accion(1)
  }
}
sumarTodos(3, (i) => {
  console.log(i)
})
