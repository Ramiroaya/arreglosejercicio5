let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let arreglo: number[] = Array(tamañoArreglo);
  let indice: number;
  let sumaIndices: number = 0;

  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el numero en el indice" + indice));
    sumaIndices = sumaIndices + arreglo[indice];
  }
  console.log("La suma de los indices es:   " + sumaIndices);
});
