
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