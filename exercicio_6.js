function returnNumbersDivisibleByTwo(list = []) {
  const evenNumbers = list.filter((number) => number % 2 === 0 && number !== 0); // em cpp é: number & 1 === 0
  return evenNumbers;
}

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const evenNumbers = returnNumbersDivisibleByTwo(list);
console.log(evenNumbers);
