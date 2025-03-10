let stringVar, numberVar, booleanVar;

stringVar = prompt("Введіть рядок:");
numberVar = prompt("Введіть число:");
booleanVar = prompt("Введіть булеве значення (true/false):");

numberVar = Number(numberVar);
booleanVar = booleanVar.toLowerCase() === "true";

console.log("Тип stringVar: " + typeof(stringVar));
console.log("Тип numberVar: " + typeof(numberVar));
console.log("Тип booleanVar: " + typeof(booleanVar));

document.body.innerHTML = `
    <h1>Анкета</h1>
    <p><strong>Рядок:</strong> ${stringVar} (Тип: ${typeof(stringVar)})</p>
    <p><strong>Число:</strong> ${numberVar} (Тип: ${typeof(numberVar)})</p>
    <p><strong>Булеве значення:</strong> ${booleanVar} (Тип: ${typeof(booleanVar)})</p>
`;
