//1. Функция debounce
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    // Устанавливаем новый таймер для вызова функции после задержки
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой 2c.");
}, 2000);

debouncedFunction();
debouncedFunction();

//2. Глубокое клонирование объекта

function deepClone(obj) {
  // Проверяем, является ли obj объектом
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Создаём новый объект (или массив, если это массив)
  let clone = Array.isArray(obj) ? [] : {};

  // Рекурсивно копируем все свойства объекта
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Пример:
const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

const copy = deepClone(original);
copy.address.city = "Los Angeles";

console.log(original.address.city); //оригинальный объект
console.log(copy.address.city); //клонированный объект
