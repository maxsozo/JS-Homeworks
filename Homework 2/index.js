{
var a = 5;  // спочатку створюємо змінну а і передаємо значення в неї
var b, c;   // створюємо змінні b i c

b = (a * 5);    // передаємо в змінну b значення
b = (c = (b/2));    // передаємо в змінну b нові значення після того як передадуться значення в змінну с
}


{
let age = +prompt("Вкажіть ваш вік");
let yearNow = 2024;
let dateOfBirth = (yearNow - age);
alert(dateOfBirth);
}


{
let celsius = +prompt("Вкажіть температуру в цельсіях");
let fahrenheit = ((celsius * 9) / 5) + 32;
alert(fahrenheit);
}


{
let num1 = +prompt("Напишіть число яке хочите поділити");
let num2 = +prompt("Вкажіть на скільки хочите поділити");
let division = Math.floor(num1 / num2);
alert(division);
}


{
const eur = 41;
let grn = +prompt("Скільки ви хочите обміняти з гивні на євро?");
let division = grn / eur;
division = division.toFixed(2);
alert(division);
}


{
const red = parseInt(prompt("Введіть значення для червоного кольору (0-255):"));
const green = parseInt(prompt("Введіть значення для зеленого кольору (0-255):"));
const blue = parseInt(prompt("Введіть значення для синього кольору (0-255):"));

let element = document.getElementById("bg"); 

element.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}


{
let floors = +prompt("Введіть кількість поверхів в будинку");
let apartmentOnFloor = +prompt("Введіть кількість квартир на поврсі");
let numApartment = +prompt("Введіть номер квартири");

let numEntrance = Math.ceil( numApartment / (floors * apartmentOnFloor));
let numFloor = Math.ceil(( numApartment % (floors * apartmentOnFloor)) / apartmentOnFloor);

alert('Квартира ' + numApartment + ' знаходится в ' + numEntrance + "-му під'їзді на " + numFloor + '-му поверсі');
}

