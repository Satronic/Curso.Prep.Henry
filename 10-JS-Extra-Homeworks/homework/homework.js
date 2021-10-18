// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const newMatrix = [];
  for (const key in objeto) {
    newMatrix.push([key, objeto[key]]);
  } 
  return newMatrix;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //Covierte el string en un array
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charAt(i));
  }

  //Elimina elementos repetidos en el array
  const newArray = [];
  
  while(array.length != 0) {
    if (newArray.indexOf(array[0]) === -1) {
      newArray.push(array[0]);
      array.shift();
    } 
    if (newArray.indexOf(array[0]) != -1) {
      array.shift();
    }
  }

  //Crea objeto con los elemntos de la matriz y la frecuencia de los datos
  const objFrec = {};
 
  for (var i = 0; i < newArray.length; i++) {
    let frec = 0;
    for (var j = 0; j < string.length; j++) {
      if (newArray[i] === string.charAt(j)) {
        frec = frec + 1;
        objFrec[newArray[i]] = frec;
      }
    }
  }
  //console.log(newArray, objFrec);
  return objFrec;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let stringUpper = '';
  let stringLower = '';
  let contUper = 0;
  let contLower = 0;

  for (let i = 0; i < s.length; i++){
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      stringUpper = stringUpper + s[i];
      contUper = contUper + 1;
    } else {
      stringLower = stringLower + s[i];
      contLower = contLower + 1;
    }
  }
  return stringUpper + stringLower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  const arrayWords = [];
  let word = '';
  
  str = str + ' ';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != ' ') {
      word = word + str.charAt(i);
    } else {
      arrayWords.push(word);
      word = '';
    }
  }
  //console.log(arrayWords);

  const arrayWordsMirror = [];
  let wordMirror = '';
  let wordA = '';

  for (let i = 0; i < arrayWords.length; i++) {
    wordA = arrayWords[i] + ' ';
    for (let j = wordA.length - 1; j >= 0 ; j--) {
      wordMirror = wordMirror + wordA[j]; 
    }
    arrayWordsMirror.push(wordMirror);
  }
  let strMirror = arrayWordsMirror[arrayWordsMirror.length - 1]

  return strMirror.substr(1, strMirror.length);
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numString = numero.toString();        //Se declara una cadena para almacenar el numero converido en cadena
  let numStringInv = '';                    //Se declara una cadena para almacenar el numero invertido
  let respuesta = '';

  for (let i = numString.length - 1; i >= 0; i--) {
    numStringInv = numStringInv + numString.charAt(i);
  }

  if (numString === numStringInv) {
    respuesta = 'Es capicua';
  } else {
    respuesta = 'No es capicua';
  }
  return respuesta;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newCadena = '';
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) === 'a' || cadena.charAt(i) === 'b' || cadena.charAt(i) === 'c') {
      newCadena = newCadena;
    } else {
      newCadena = newCadena + cadena.charAt(i);
    }
  }
  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let array = arr;
  let limit = arr.length;
  let arrMayor = [];
  const arrMenor = [];            

  while(arrMenor.length < limit) {
    while (array.length > 1) {                  //Elimina los elementos mayores del array hasta que encuentra el menor
      if (array[0].length > array[1].length) {
        arrMayor.push(array[0]);
        array.splice(0, 1);
      } else {
        arrMayor.push(array[1]);
        array.splice(1, 1);
      }
    }
    arrMenor.push(array[0]);
    array = arrMayor;
    arrMayor = [];
  }
return arrMenor;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  newArray = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newArray.push(arreglo1[i])
      }
    }
  }
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

