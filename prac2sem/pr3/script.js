
        class User {
            constructor(name, age, profession) {
                this.name = name;
                this.age = age;
                this.profession = profession;
            }

            display() {
                return `Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`;
            }
        }

        class Admin extends User {
            constructor(name, age, profession, role) {
                super(name, age, profession);
                this.role = role;
            }

            display() {
                return `Адміністратор: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Роль: ${this.role}`;
            }
        }

        function validateAge(age) {
            return !isNaN(age) && age > 0;
        }

        function createUser() {
            let name = prompt("Введіть ім'я:");
            let age = parseInt(prompt("Введіть вік:"), 10);
            while (!validateAge(age)) {
                age = parseInt(prompt("Некоректний вік! Введіть вік ще раз:"), 10);
            }
            let profession = prompt("Введіть професію:");
            let isAdmin = confirm("Цей користувач є адміністратором?");

            if (isAdmin) {
                let role = prompt("Введіть роль адміністратора:");
                return new Admin(name, age, profession, role);
            } else {
                return new User(name, age, profession);
            }
        }

        let user = createUser();
        alert(user.display());
        console.log(user.display());