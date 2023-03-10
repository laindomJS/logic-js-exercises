/* Escribir un programa que pida al usuario dos números enteros y muestre por pantalla el siguiente mensaje:
“<n> entre <m> da un cociente <c> y un resto <r>”, donde
<n> y <m> son los números introducidos por el usuario, y <c> y <r> son el cociente y el resto de la división entera respectivamente. */

// Solucion creada por laindomJS

function showDivision(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return 'One parameter is wrong';
  }
  
  if (n1 / n2 === Infinity) return 'Is Infinite!';
  
  const result = n1 / n2;
  const module = n1 % n2;
  
  return `${n1} entre ${n2} da un cociente de ${result} y un resto de ${module}`;
}
showDivision(10,5);

// Solucion creada por Raynier95

const numDivididos=(num1=undefined,num2=undefined)=>{
  if(num1 === undefined || num2 === undefined) return console.warn(`Esta indefinido`);
  if(typeof num1 !== 'number' || typeof num2 !== 'number') return console.warn(`No es un numero`);
  let cociente = num1 / num2
  let residuo = num1 % num2
  console.log(`El cociente entre ${num1} y ${num2} es ${cociente} mientras que su residuo es ${residuo}`)
}
numDivididos(7,4)