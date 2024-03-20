// {
//     function createPerson(name, surname) {
//         return {
//             name: name,
//             surname: surname,
//             getFullName: function() {
//                 if (this.fatherName) {
//                     return `${this.name} ${this.fatherName} ${this.surname}`;
//                 } else {
//                     return `${this.name} ${this.surname}`;
//                 }
//             }
//         }
//     }

//     const a = createPerson("Вася", "Пупкін")
//     const b = createPerson("Ганна", "Іванова")
//     const c = createPerson("Єлизавета", "Петрова")

//     console.log(a.getFullName()) //Вася Пупкін
//     a.fatherName = 'Іванович'    
//     console.log(a.getFullName()) //Вася Іванович Пупкін

//     console.log(b.getFullName()) //Ганна Іванова
// }

// {
//     function createPersonClosure (name, surname) {
        
//         let fullName = name + ' ' + surname;
//         let [firstName, lastName] = fullName.split(' ');
//         let fatherName = '';
//         let age = 0;

//         return {
//             getName: function () {
//                 return name;
//             },

//             getSurname: function () {
//                 return surname;
//             },

//             getFatherName: function () {
//                 return fatherName;
//             },

//             getAge: function () {
//                 return age;
//             },

//             getFullName: function () {
//                 if (fatherName) {
//                     return `${name} ${fatherName} ${surname}`;
//                 } else {
//                     return `${name} ${surname}`;
//                 }   
//             },

//             setName: function (newName) {
//                 name = newName;
//             },

//             setSurname: function (newSurname) {
//                 surname = newSurname;
//             },

//             setFatherName: function (newFatherName) {
//                 fatherName = newFatherName;
//             },

//             setAge: function (newAge) {
//                 if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
//                     age = newAge;
//                 }
//             },

//             setFullName: function(fullName) {
//                 const parts = fullName.split(' ');
//                 const length = parts.length;
//                 if (length >= 1) {
//                     surname = parts[length - 3] || 'Анонімович';
//                 }
//                 if (length >= 2) {
//                     name = parts.slice(0, length - 2).join(' ') || 'Анонім';
//                 }
//                 if (length >= 3) {
//                     fatherName = parts[length - 1] || '';
//                 }
//             }
//         }
        
//     }
//     const a = createPersonClosure("Вася", "Пупкін")
//     const b = createPersonClosure("Ганна", "Іванова") 
//     console.log(a.getName())
//     a.setAge(15)
//     a.setAge(150) //не працює
//     b.setFullName("Петрова Ганна Миколаївна")
//     console.log(b.getFatherName()) //Миколаївна
// }

// {
//         function createPersonClosureDestruct (userInfo) {
            
//             let {name = 'Анонім', surname = 'Анонімус', fatherName = 'Анонімович', age = 1} = userInfo;
    
//             return {
//                 getName: function () {
//                     return name;
//                 },
    
//                 getSurname: function () {
//                     return surname;
//                 },
    
//                 getFatherName: function () {
//                     return fatherName;
//                 },
    
//                 getAge: function () {
//                     return age;
//                 },
    
//                 getFullName: function () {
//                     if (fatherName) {
//                         return `${name} ${fatherName} ${surname}`;
//                     } else {
//                         return `${name} ${surname}`;
//                     }   
//                 },
    
//                 setName: function (newName) {
//                     name = newName;
//                 },
    
//                 setSurname: function (newSurname) {
//                     surname = newSurname;
//                 },
    
//                 setFatherName: function (newFatherName) {
//                     fatherName = newFatherName;
//                 },
    
//                 setAge: function (newAge) {
//                     if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
//                         age = newAge;
//                     }
//                 },
    
//                 setFullName: function(fullName) {
//                     const parts = fullName.split(' ');
//                     const length = parts.length;
//                     if (length >= 1) {
//                         surname = parts[length - 3];
//                     }
//                     if (length >= 2) {
//                         name = parts.slice(0, length - 2).join(' ');
//                     }
//                     if (length >= 3) {
//                         fatherName = parts[length - 1];
//                     }
//                 }
//             }
            
//         }
//         const b = createPersonClosureDestruct({name: 'Миколай', age: 75});
//         console.log(b.getSurname());

// }

// {
//     function isSorted (...args) {
//         if(!args.length) {
//             return false;
//         }
//         const isEveryNumber = args.every((element) => !isNaN(element));
//         if(!isEveryNumber) {
//             return false;
//         }
//         for(let i = 0; i < args.length - 1; i++){

//             if((args[i] > args[i+1]))
//                 return false;

//         }
//         return true;
//     }

//     let arr = [];
//     let userInput;

//     while(userInput = prompt('Що ви хочите поставити у вашу скриньку?')) {
//         if(!isNaN(userInput)) {
//             arr.push(+userInput);
//         }
        
//     }
//     console.log(isSorted(...arr));
// }

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
                    surname = parts[length - 3] || '';
                }
                if (length >= 2) {
                    name = parts.slice(0, length - 2).join(' ') || '';
                }
                if (length >= 3) {
                    fatherName = parts[length - 1] || '';
                }
            }
        }
        
    }

    function personForm(parent, person) {
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = person.getName();
        parent.appendChild(nameInput);
    
        const surnameInput = document.createElement('input');
        surnameInput.setAttribute('type', 'text');
        surnameInput.value = person.getSurname();
        parent.appendChild(surnameInput);
    
        const fatherNameInput = document.createElement('input');
        fatherNameInput.setAttribute('type', 'text');
        fatherNameInput.value = person.getFatherName();
        parent.appendChild(fatherNameInput);
    
        const ageInput = document.createElement('input');
        ageInput.setAttribute('type', 'number');
        ageInput.value = person.getAge();
        parent.appendChild(ageInput);
    
        const fullNameInput = document.createElement('input');
        fullNameInput.setAttribute('type', 'text');
        fullNameInput.value = person.getFullName();
        parent.appendChild(fullNameInput);
    
        nameInput.addEventListener('input', () => {
            person.setName(nameInput.value);
            nameInput.value = person.getName();
        });
    
        surnameInput.addEventListener('input', () => {
            person.setSurname(surnameInput.value);
            surnameInput.value = person.getSurname();
        });
    
        fatherNameInput.addEventListener('input', () => {
            person.setFatherName(fatherNameInput.value);
            fatherNameInput.value = person.getFatherName();
        });
    
        ageInput.addEventListener('input', () => {
            const age = parseInt(ageInput.value);
            if (!isNaN(age) && age >= 0 && age <= 100) {
                person.setAge(age);
            } else {
                ageInput.value = person.getAge();
            }
        });
    
        fullNameInput.addEventListener('input', () => {
            person.setFullName(fullNameInput.value);
            fullNameInput.value = person.getFullName();
            const parts = fullNameInput.value.split(' ');
            if (parts.length === 3) {
                nameInput.value = parts[0];
                surnameInput.value = parts[1];
                fatherNameInput.value = parts[2];
            }
        });
    }
    
    const parentElement = document.createElement('div');
    document.body.appendChild(parentElement);
    
    const b = createPersonClosure("Ганна", "Іванова");
    b.setAge(15);
    b.setFullName("Петрова Ганна Миколаївна");
    
    personForm(parentElement, b);
}