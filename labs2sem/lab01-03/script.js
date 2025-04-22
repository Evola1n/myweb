"use strict";

// Класи для резюме
class PersonalInfo {
  constructor(name, email, phone, age) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.age = Number(age);
  }
}

class Education {
  constructor(education) {
    this.education = education;
  }
}

class Experience {
  constructor(experience) {
    this.experience = experience;
  }
}

class Skills {
  constructor(skills) {
    this.skills = skills.split(",").map(skill => skill.trim());
  }
}

class Resume {
  constructor(personalInfo, education, experience, skills) {
    this.personalInfo = personalInfo;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
  }

  display() {
    const output = document.getElementById("resumeOutput");
    output.innerHTML = `
      <h2>Резюме</h2>
      <p><strong>Ім'я:</strong> ${this.personalInfo.name}</p>
      <p><strong>Email:</strong> ${this.personalInfo.email}</p>
      <p><strong>Телефон:</strong> ${this.personalInfo.phone}</p>
      <p><strong>Вік:</strong> ${this.personalInfo.age}</p>
      <p><strong>Освіта:</strong> ${this.education.education}</p>
      <p><strong>Досвід роботи:</strong> ${this.experience.experience}</p>
      <p><strong>Навички:</strong> ${this.skills.skills.join(", ")}</p>
    `;
  }
}

// Обробка форми
document.getElementById("resumeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Збір даних
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value.trim();
  const education = document.getElementById("education").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const skills = document.getElementById("skills").value.trim();

  // Валідація
  if (!name || !email || !phone || isNaN(age) || !education || !experience || !skills) {
    alert("Будь ласка, заповніть всі поля правильно!");
    return;
  }

  // Створення об'єктів
  const personalInfo = new PersonalInfo(name, email, phone, age);
  const educationObj = new Education(education);
  const experienceObj = new Experience(experience);
  const skillsObj = new Skills(skills);

  // Створення резюме
  const resume = new Resume(personalInfo, educationObj, experienceObj, skillsObj);

  // Відображення резюме
  resume.display();

  // Збереження в localStorage
  localStorage.setItem("savedResume", JSON.stringify(resume));
});

// Завантаження резюме з localStorage при старті
window.addEventListener("DOMContentLoaded", () => {
  const savedResume = localStorage.getItem("savedResume");
  if (savedResume) {
    const data = JSON.parse(savedResume);

    const personalInfo = new PersonalInfo(data.personalInfo.name, data.personalInfo.email, data.personalInfo.phone, data.personalInfo.age);
    const educationObj = new Education(data.education.education);
    const experienceObj = new Experience(data.experience.experience);
    const skillsObj = new Skills(data.skills.skills.join(", "));

    const resume = new Resume(personalInfo, educationObj, experienceObj, skillsObj);
    resume.display();
  }
});
