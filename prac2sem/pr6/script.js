"use strict";
import { greet, add, multiply, sumAll } from "./utils.js";
import { user, numbers1, numbers2 } from "./data.js";

console.log("Модульний код підключено!");

greet("Студент");
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));

const { name, age, city } = user;
const userInfo = `Користувач: ${name}, Вік: ${age}, Місто: ${city}`;
console.log(userInfo);

const combined = [...numbers1, ...numbers2];
console.log("Об'єднаний масив:", combined);

console.log("Сума:", sumAll(1, 2, 3, 4, 5));

const app = document.getElementById("app");
app.innerHTML = `
  <p>${userInfo}</p>
  <p>Об'єднаний масив: [${combined.join(", ")}]</p>
  <p>Сума чисел: ${sumAll(...combined)}</p>
`;
