

let weight = +prompt('Введіть свою вагу'+' '+'(кг)');
let heightInSm = +prompt('Введіть свій зріст'+' '+'(см)');
let heightInM = heightInSm / 100;
let sum;
sum = weight / (heightInM * heightInM);

function bodyWeightCheck () {
    if (sum <= 18.5){
       return alert ('Давай набирай вес дрищ!');
    }
    else if (sum <= 25) {
       return alert ('Красавчик!');
    }
    else {
        return alert ('Роби кардіо жирна жопа!')
    }
}

bodyWeightCheck()


