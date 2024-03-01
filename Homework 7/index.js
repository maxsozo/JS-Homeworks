{
    function temperatureToFahrenheit(celsius) {
        let fahrenheit = ((celsius * 9) / 5) + 32;
        return fahrenheit
    }
    console.log(temperatureToFahrenheit(10))
}

{
    function RGB_background(red, green, blue) {
        let element = document.getElementById("bg"); 
       return element.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    RGB_background(50, 12, 100);
}

{
    function apartmentLocation(floors, apartmentOnFloor, numApartment) {
        let numEntrance = Math.ceil( numApartment / (floors * apartmentOnFloor));
        let numFloor = Math.ceil(( numApartment % (floors * apartmentOnFloor)) / apartmentOnFloor);
        let obj = {
            numberEntrance: numEntrance,
            numberFloor: numFloor
        };
        
        return obj
    }
    console.log(apartmentLocation(4, 4, 81));
}

{
    function correctNames(){
        let name = prompt("Введіть ім'я").trim();
        let lastName = prompt('Введіть своє прізвище').trim();
        let fatherName = prompt("Введіть і'мя по батьковi").trim();
        let correctName = name[0].toUpperCase() + name.slice(1).toLowerCase();
        let correctLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        let correctFatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();
        let fullName = correctLastName + ' ' + correctName + ' ' + correctFatherName;
        let obj = {
            name: correctName,
            surname: correctLastName, 
            fatherName: correctFatherName, 
            fullName:fullName
        }
        return obj
    }
    console.log(correctNames());
}

{
    function newLineString(str) {
        let newLine = str.split('\\n').join('\n');
        return newLine
    }
    console.log(newLineString('hello my name is \nMaks\n;)'))
}

{
    const dateOfBirth = (age, yearNow) => age ? yearNow - age : alert('Ви не вказали вік або скасували введення');
    console.log(dateOfBirth(18, 2024));
}

{
        function verification(correctLogin, correctPassword) {
            let userLogin = prompt('Введіть логін');
            let userPassword
            if(correctLogin === userLogin) {
                userPassword = prompt('Введіть пароль');        
            }
            else{
                alert('логін не вірний');
            }

            if(correctPassword === userPassword) {
                alert('Ласкаво просимо');
            }
            else{
                alert('пароль не вірний')
            }
        }

        verification('admin', 'qwerty');
}