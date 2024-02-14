
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
    let UserText = prompt('Напишіть щось на рахунок політики');
    let wordCheck = UserText.includes('Я за рашку');
    if (wordCheck === true) { 
        alert('ти сепор! На мило тебе!!!');
    }
    else {
        alert('Молодець!')
    }
}