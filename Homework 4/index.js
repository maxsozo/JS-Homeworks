
{
    let enterValue = prompt('Введіть число');
    if (isNaN(enterValue)) {
        alert('Ви ввели не число');
    } 
    else if (enterValue === null) {
        alert('Ви нічого не ввели');
    } 
    else if(enterValue === "") {
        alert ('Ви нічого не ввели');
    } 
    else {
        alert (`Ваше число ${enterValue}`);
    }
}

{
    let userText = prompt('Напишіть щось на рахунок політики');
    let wordCheck = userText.includes('Я за рашку');
    if (wordCheck === true) { 
        alert('ти сепор! На мило тебе!!!');
    }
    else {
        alert('Молодець!')
    }
}

{
    let answer1 = confirm('Ви любите собак?');
    let answer2 = confirm('Ви любите пиво?');
    let answer3 = confirm('Ви любите сопрт?');
    alert ('Ваша відповідь: ' + answer1);
    alert ('Ваша відповідь: ' + answer2);
    alert ('Ваша відповідь: ' + answer3);
}

{
    let userSex = confirm('Ви чоловік чи жінкка? \nЯкщо чоловік то нажміть Ок, якщо жінка нажміть скасувати');
    if (userSex === true) {
        alert('Ви чоловік');
    }
    else {
        alert('Ви жінка');
    }
}

{
    let sizeInSm = +prompt('Введіть обхват талії в (см)');
    if(sizeInSm < 89) {
        alert('Ваш розмір нижчий за XXS');
    }
    else if (sizeInSm >= 89 && sizeInSm <= 92) {
        alert('XXS');
    }
    else if (sizeInSm >= 93 && sizeInSm <= 96) {
        alert('XS');
    }
    else if (sizeInSm >= 97 && sizeInSm <= 101) {
        alert('S');
    }
    else if (sizeInSm >= 102 && sizeInSm <= 104) {
        alert('M');
    }
    else if (sizeInSm >= 105 && sizeInSm <= 108) {
        alert('L');
    }
    else if (sizeInSm >= 109 && sizeInSm <= 112) {
        alert('XL');
    }
    else if (sizeInSm >= 113 && sizeInSm <= 117) {
        alert('XXL');
    }
    else if (sizeInSm >= 118 && sizeInSm <= 122) {
        alert('XXXL');
    }
    else if (sizeInSm > 122) {
        alert('Ну ти і танк');
    }
    else {
        alert('Ви ввели не чисоло');
    }
    
}

{
    let userSex = confirm('Ви чоловік чи жінкка? \nЯкщо чоловік то нажміть Ок, якщо жінка нажміть скасувати') ? alert('Ви чоловік'): alert('Ви жінка');
}

{
    let userAge = prompt("Введіть свій вік:");
    if (!userAge || userAge.trim() === "") {
        alert("Помилка: Ви не ввели вік або натиснули скасування.");
    } else {
        alert("Ваш вік: " + userAge);
    }
}

{
    let question = confirm('шопінг?');
    if (!question || question === '') {
        alert('ти - бяка');
    } else {
        alert('ПОООГНАЛИ!!!');
    }
}

{
    let question = confirm('шопінг?');
    if (question === false) {
        alert('ти - бяка');
    } 
    else {
        alert ('ПОООГНАЛИ!!!');
    }
}

{
    let firstName = prompt("Введіть ім'я:") || 'Анонім';
    let lastName = prompt('Введіть прізвище:') || 'Анонімовний';
    let middleName = prompt('Введіть по батькові:') || 'Анонімович';

    console.log("Ім'я:", firstName);
    console.log('Прізвище:', lastName);
    console.log('По батькові:', middleName);
}

{
    let firstName = prompt("Введіть ім'я:");
    if (!firstName) {
    firstName = 'Анонім';
    }

    let lastName = prompt("Введіть прізвище:");
    if (!lastName) {
    lastName = 'Анонімовний';
    }

    let middleName = prompt("Введіть по батькові:");
    if (!middleName) {
    middleName = 'Анонімович';
    }

    console.log("Ім'я:", firstName);
    console.log("Прізвище:", lastName);
    console.log("По батькові:", middleName);
}

{
    let login = 'admin';
    let password = 'qwerty';
    let userLogin = prompt('Введіть логін');
    let userPassword
    if(login === userLogin) {
        userPassword = prompt('Введіть пароль');        
    }
    else{
        alert('логін не вірний');
    }

    if(password === userPassword) {
        alert('Ласкаво просимо');
    }
    else{
        alert('пароль не вірний')
    }
}

{
    const rateEur = 41;
    const rateGrn = 0.025;
    let enterRate = prompt('вкажіть валюту яку хочите обміняти GRN чи EUR?').toLowerCase();
    let questionRate;
    let sum;
    if(enterRate === 'eur') {
        questionRate = confirm('Купити чи продати?\nЯкщо хочите купити нажміть відміна а якщо продати то ОК');
        sum = +prompt('скільки хочите продати? чи купити?');
        if(questionRate === true) {
            let receivedSum  = sum * rateEur;
            alert(`тепер у вас: ${receivedSum} гривень`);
        }
        else if(questionRate === false) {
           let receivedSum = sum / rateEur;
           alert(`тепер у вас: ${receivedSum} євро`);
        }
        else {
            alert('ви ввели якусь білеберду');
        }
    }
    else if(enterRate === 'grn') {
        questionRate = confirm('Купити чи продати?\nЯкщо хочите купити нажміть відміна а якщо продати то ОК');
        sum = +prompt('скільки хочите продати? чи купити?');
        if(questionRate === true) {
            let receivedSum = sum * rateGrn;
            alert(`тупер у вас: ${receivedSum} гривень`);
        }
        else if(questionRate === false) {
            let receivedSum = sum / rateGrn;
            alert(`тепер у вас: ${receivedSum} євро`);
        }
        else {
            alert('ви ввели якусь білеберду')
        }
    }
    else {
        alert('ви ввели якусь білеберду')
    }
}

