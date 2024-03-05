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