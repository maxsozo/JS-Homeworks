
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