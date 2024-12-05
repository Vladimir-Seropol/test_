//1. Проверка на палиндром
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/g, "");

  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("А лес у села"));
console.log(isPalindrome("Всем привет!"));

//2. FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

//3. Разбиение массива на части
function chunkArray(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
