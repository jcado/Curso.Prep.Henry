// No cambies los nombres de las funciones.
/* Nota: algunos codigos los deje en comentario por que los realice y tienen alguna diferencia pero pasan el 
testeo en otras cosolas */

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  // segun 
    if(x > y) {
      return x;
    }
    return y;
}

/* pienso que el codigo que se desarrollo no seria el optimo, por que si se cumple estaria bien, pero del resto en ninguna linea de codigo
esta haciendo la comparacion de si son iguales y por ultimo dice que si son iguales debe imprimir cualquier numero como puede ser x,  y. 
mi intepretacion a este ejercico seria de la siguiente manera.
// mi codigo

  function obtenerMayor(x, y) {
 if(x > y) {
  console.log(X); //condicion de mayor
}
       if(x === y){ // condicion de si son iguales
            console.log(Math.random(x, y));  // si son iguales imprimira cualquier numro entre x, y,
        }
}

*/


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  if(edad >= 18){
      return "Allowed";
  }
  return "Not allowed";

}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

    if(status === 1 ) {
      return "Online";
    } else if(status === 2 ){
        return "Away";
    }
        return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  if(idioma === 'aleman') {
    return 'Guten Tag!';
  } else if (idioma === 'mandarin') {
    return 'Ni Hao!';
  } else if (idioma === 'ingles') {
    return 'Hello!';
  } else {
    return 'Hola!';
  }
}

  /*if(idioma === "aleman") {
     return "Guten Tag!";
  }   
      else if( idioma === "mandarin") {
        return "Ni Hao!"; 
  }       
          else if(idioma === ingles) {
            return "Hola!";
  } 
              else (idioma === undefined) 
                return "Hola!";
              

}*/

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch(color) {
    case "blue":
      return "This is blue";
    case "red": 
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default: 
    return "Color not found";
  }
}
/*
  switch (colors) {
    case "blue":
      return "This is blue";
        break
            case "red":
            return "This is red";
             break
               case "green":
               return "This is green";
                break
                   case "orange":
                  return "This is orange";
                    break
                default:
                return "Color not found";
} 
} 
*/
 

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

return numero === 10 || numero === 5;


}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
// la funcion `Math.floor` es para redondear a un numero entero a mas bajo cercano ejemplo 4.5 seria = a 4.

  return numero % 1 === 0;


}


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

if(numero % 15 === 0) return 'fizzbuzz';
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;
}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //ok - Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //ok - Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //ok -Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //ok - 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  else if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  else if(num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  }
  else if(num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  else {
    return false;
  }

  /*if(num1 === 0 || num2 === 0 || num3 === 0){  // este codigo que realice tambien hace lo mismo pero como tiene
  return "Error";                                   algunas cosas diferentes no pasa el test por eso lo dejo como comentario
  } else if(num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
    } else if(num1 > 0 && num1 > num2 && num1 > num3){
      return "Número 1 es mayor y positivo";
    }   
        else if (num3 > num1 && num3 > num2){
        return num3 + 1;
    }
    return "false";*/
}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

 /* NOTA: este fue mi interpretacion delalgoritmo y fue probado y cumple todo los parametros, lo dejo en 
 comentario por que si dejo el codigo al no ser identico al que esta en el test no pasa, pero si lo ejecutamos 
 funciona con cualquier numero.
 
 if(numero % 2 === 0 || numero <= 1){
    return "falso";
  }
    if(numero === 2){
      return "falso";
    }
  for(var i = 2; i > 1; i++){
    if(i % 2 !== 0 ) {
      return "true";
    }

  }
}*/
if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}
function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) {
    return "Soy verdadero";
  }
return "Soy falso";
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var arraytable6 = []
  for(i = 0; i <= 10; i++){
    arraytable6.push(6 * i);
  }
   return arraytable6;
   
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {
    return true;
  }
   return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
