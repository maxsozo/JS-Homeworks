
{
    let enteredValue = prompt('Введіть число');
    if (isNaN(enteredValue)) {
        alert('Ви ввели не число');
    } 
    else if (enteredValue === null) {
        alert('Ви нічого не ввели');
    } 
    else if(enteredValue === "") {
        alert ('Ви нічого не ввели');
    } 
    else {
        alert (`Ваше число ${enteredValue}`);
    }
}