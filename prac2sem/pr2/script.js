function createSurvey() {
    const name = prompt("Введіть ваше ім'я:");
    const age = Number(prompt("Введіть ваш вік:"));
    const city = prompt("Введіть ваше місто:");

    const isAdult = age >= 18;

    return {
        name: name,
        age: age,
        city: city,
        isAdult: isAdult
    };
}

function displaySurvey(surveyData) {
    const message = `
        Ім'я: ${surveyData.name}
        Вік: ${surveyData.age} (${surveyData.isAdult ? "повнолітній" : "неповнолітній"})
        Місто: ${surveyData.city}
    `;

    console.log(message);
    alert(message);
}

function startSurvey() {
    const surveyData = createSurvey();
    displaySurvey(surveyData);
}
