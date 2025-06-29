"use strict";

export function greet(name) {
  console.log(`Привіт, ${name}!`);
}

export const add = function(a, b) {
  return a + b;
};

export const multiply = (a, b) => a * b;

export function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
