{
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d
        // a буде 100, b буде 21 і с буде 30 d undefined
        b++
        a *= 10
        console.log(a, b, c);
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d
        // a буде 100, b буде 521 і с буде 50 d undefined
        b += 500
        console.log(a, b, c);
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d
        // a буде 100500, b 521 і с undefined d буде value
        console.log(a, b, d);
        {
            let a = -50
            b     = 1000
            //які тут будуть значення змінних a, b, c, d
            // a буде -50, b буде 1000 і с undefined d буде value
            console.log(a, b, d);
        }
        //які тут будуть значення змінних a, b, c, d
        console.log(a, b, d);
        // a буде 100500, b буде 1000 і с undefined d value

    }
    //які тут будуть значення змінних a, b, c, d
    // a буде 100, b буде 1000 і с undefined d undefined
    console.log(a, b);
}
//які тут будуть значення змінних a, b, c, d
// a буде 100, b undefined і с undefined d undefined
console.log(a);
}

{
    let age = +prompt("Скільки вам років?", "");

    if (age <= 0) {
        alert("Негативний вік? Це як?");
    }
    else if (age < 18) {
        alert("школяр");
    }
    else if (age < 30) {
        alert("молодь");
    }
    else if (age < 45) {
        alert("зрілість");
    }
    else if (age < 60) {
        alert("захід сонця");
    }
    else {
        alert("чи кіборг, чи KERNESS");
    }
}

{
    let sizeInSm = +prompt('Введіть обхват талії в (см)');
    switch(true){
        case sizeInSm < 89:
            alert('Ваш розмір нижчий за XXS');
            break;
        case sizeInSm >= 89 && sizeInSm <= 92:
            alert('XXS');
            break;
        case sizeInSm >= 93 && sizeInSm <= 96:
            alert('XS');
            break;
        case sizeInSm >= 97 && sizeInSm <= 101:
            alert('S');
            break;
        case sizeInSm >= 102 && sizeInSm <= 104:
            alert('M');
            break;
        case sizeInSm >= 105 && sizeInSm <= 108:
            alert('L');
            break;
        case sizeInSm >= 109 && sizeInSm <= 112:
            alert('XL');
            break;
        case sizeInSm >= 113 && sizeInSm <= 117:
            alert('XXL');
            break;
        case sizeInSm >= 118 && sizeInSm <= 122:
            alert('XXXL');
            break;
        case sizeInSm > 122:
            alert('Ну ти і танк');
            break;
        default:
            alert('Ви ввели не чисоло');
    }
}