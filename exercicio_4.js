function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function ordList(lista = []) {
  if (lista.length > 20) {
    console.log("Lista muito grande");
    return;
  }

  if (lista.length < 10) {
    console.log("Lista muito pequena");
    return;
  }

  let listaOrdenada = mergeSort(lista);
  return listaOrdenada;
}

function getRandonNumbers(size = 5) {
  let numbers = [];
  for (let i = 0; i < size; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  return numbers;
}

const randomNumbersLength5 = getRandonNumbers();
const randomNumbersLength15 = getRandonNumbers(15);
const randomNumbersLength25 = getRandonNumbers(25);

let listaOrdenada = ordList(randomNumbersLength5);
console.log(listaOrdenada);
listaOrdenada = ordList(randomNumbersLength15);
console.log(listaOrdenada);
listaOrdenada = ordList(randomNumbersLength25);
console.log(listaOrdenada);
