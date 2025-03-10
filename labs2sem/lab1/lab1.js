// 1. Створюємо змінні для кожного типу даних
let stringVar, numberVar, booleanVar;

// 2. Запитуємо значення у користувача через prompt()
stringVar = prompt("Введіть рядок:");
numberVar = prompt("Введіть число:");
booleanVar = prompt("Введіть булеве значення (true/false):");

// Перетворюємо значення типу 'number' і 'boolean'
numberVar = Number(numberVar);
booleanVar = booleanVar.toLowerCase() === "true";

// 3. Виводимо тип кожної змінної в консоль за допомогою typeof
console.log("Тип stringVar: " + typeof(stringVar));
console.log("Тип numberVar: " + typeof(numberVar));
console.log("Тип booleanVar: " + typeof(booleanVar));

// 4. Відображаємо заповнену анкету у форматованому вигляді на HTML сторінці
document.querySelector('.container').lab1 = `
    <h1>Анкета</h1>
    <p><strong>Рядок:</strong> ${stringVar} (Тип: ${typeof(stringVar)})</p>
    <p><strong>Число:</strong> ${numberVar} (Тип: ${typeof(numberVar)})</p>
    <p><strong>Булеве значення:</strong> ${booleanVar} (Тип: ${typeof(booleanVar)})</p>
`;
