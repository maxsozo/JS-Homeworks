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

{
    function tableArr(arrayOfArrays) {
        let str = "<table border 1px>";
    for (const array of arrayOfArrays) {
        str += "<tr>";

        for (const cell of array) {
            str += `<td>${cell}</td>`;
        }
        str += "</tr>";
    }
                    
    str += "</table>";
    document.write(str);
    }
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    tableArr(multiTable);
}

{   
    let userText = prompt('Введіть якийсь текст, розповідь');
    let badWords = ['бляха', 'муха', "пляшка", "шабля"];
    function checkBadWords(str, arrBadWords) {
        let wordsArray = str.split(' ');
        let filteredWords = wordsArray.filter(word => !arrBadWords.includes(word.toLowerCase()));
        let resultString = filteredWords.join(' ');
    
         console.log(resultString);
    }

    checkBadWords(userText, badWords);
}