
var a = 5;  // спочатку створюємо змінну а і передаємо значення в неї
var b, c;   // створюємо змінні b i c

b = (a * 5);    // передаємо в змінну b значення
b = (c = (b/2));    // передаємо в змінну b нові значення після того як передадуться значення в змінну с


let age = +prompt("Вкажіть ваш вік");
let yearNow = 2024;
let dateOfBirth = (yearNow - age);
alert(dateOfBirth);


let celsius = +prompt("Вкажіть температуру в цельсіях");
let fahrenheit = ((celsius * 9) / 5) + 32;
alert(fahrenheit);


let num1 = +prompt("Напишіть число яке хочите поділити");
let num2 = +prompt("Вкажіть на скільки хочите поділити");
let division = Math.floor(num1 / num2);
alert(division);
