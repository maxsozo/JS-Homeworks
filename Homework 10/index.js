{
    function createPerson(name, surname) {
        return {
            name: name,
            surname: surname,
            getFullName: function() {
                if (this.fatherName) {
                    return `${this.name} ${this.fatherName} ${this.surname}`;
                } else {
                    return `${this.name} ${this.surname}`;
                }
            }
        }
    }

    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'    
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}

{
    function createPersonClosure (name, surname) {
        
        let fullName = name + ' ' + surname;
        let [firstName, lastName] = fullName.split(' ');
        let fatherName = '';
        let age = 0;

        return {
            getName: function () {
                return name;
            },

            getSurname: function () {
                return surname;
            },

            getFatherName: function () {
                return fatherName;
            },

            getAge: function () {
                return age;
            },

            getFullName: function () {
                if (fatherName) {
                    return `${name} ${fatherName} ${surname}`;
                } else {
                    return `${name} ${surname}`;
                }   
            },

            setName: function (newName) {
                name = newName;
            },

            setSurname: function (newSurname) {
                surname = newSurname;
            },

            setFatherName: function (newFatherName) {
                fatherName = newFatherName;
            },

            setAge: function (newAge) {
                if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                    age = newAge;
                }
            },

            setFullName: function(fullName) {
                const parts = fullName.split(' ');
                const length = parts.length;
                if (length >= 1) {
                    surname = parts[length - 3] || 'Анонімович';
                }
                if (length >= 2) {
                    name = parts.slice(0, length - 2).join(' ') || 'Анонім';
                }
                if (length >= 3) {
                    fatherName = parts[length - 1] || '';
                }
            }
        }
        
    }
    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова") 
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не працює
    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна
    }