function removeMiddleElemento(lista = []) {
  const middle = Math.floor(lista.length / 2);
  const elementRemoved = lista.splice(middle, 1);
  console.log(elementRemoved);
  return lista;
}

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
removeMiddleElemento(list);
