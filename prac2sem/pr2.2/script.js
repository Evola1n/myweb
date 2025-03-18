// Функція для створення конвертера з використанням каррінгу
function createConverter(a, b) {
    return function(temp) {
        return a * temp + b;
    };
}

// Функція запуску процесу конвертації
function startConversion() {
    const temperature = Number(prompt("Введіть значення температури:"));
    const direction = prompt('Щоб вибрати конвертацію з "C to F" натисніть 1 якщо з "F to C" натисніть 2').toUpperCase();

    let converter;

    if (direction === "1") {
        // Конвертер для Цельсія у Фаренгейти
        converter = createConverter(9 / 5, 32);
    } else if (direction === "2") {
        // Конвертер для Фаренгейтів у Цельсій
        converter = createConverter(5 / 9, -32 * 5 / 9);
    } else {
        alert("Неправильний напрямок конвертації!");
        return;
    }

    const result = converter(temperature);
    const message = `Результат конвертації: ${result.toFixed(2)}°`;

    console.log(message);
    alert(message);
}
