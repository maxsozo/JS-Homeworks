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

{
    let color = prompt("Введіть колір","");
    if(color === 'red') {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if(color === 'black') {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if(color === 'blue') {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else if(color === 'green') {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

{
    const noSwitch = (key, cases, defaultKey='default') => {
        const choseFunc = cases[key] || cases[defaultKey];
        return choseFunc();
    }
    
    const drink = prompt("Що ви любите пити");
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай(){
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function(){
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default(){
            console.log('шото я не зрозумів')
        }
    })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            //Ця функція запускається коли дані завантажуються.
            //Інший код працює РАНШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі

            const currencyKeys = Object.keys(data.rates);
            const currencies = data.rates;
            const currencyValue = Object.values(data.rates);
            
            for (const currency of currencyKeys) {
                const currencyButton = document.createElement("button");
                currencyButton.innerText = currency;
                currencyButton.onclick = () => {
                const sum = prompt('Введіть суму в доларах');
                const result = sum * currencies[currency];
                console.log(currencies[currency]);
                alert(result);
                }
                document.body.appendChild(currencyButton);
            }

    })

}

{
     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            //Ця функція запускається коли дані завантажуються.
            //Інший код працює РАНШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        
            const currencyKeys = Object.keys(data.rates);
            const currencies = data.rates;
            const currencyValue = Object.values(data.rates);

            const fromSelect = document.getElementById('from');
            const toSelect = document.getElementById('to');
            const rate1 = document.getElementById('rate1');
            const rate2 = document.getElementById('rate2');
            const amount = document.getElementById('amount');
            const result = document.getElementById('result');
    
            for (const currency of currencyKeys) {
                const currencyOptionFrom = document.createElement("option");
                currencyOptionFrom.innerText = currency;
                fromSelect.appendChild(currencyOptionFrom);
    
                const currencyOptionTo = document.createElement("option");
                currencyOptionTo.innerText = currency;
                toSelect.appendChild(currencyOptionTo);
            }
    
            fromSelect.onchange = () => {
                const selectedFromCurrency = fromSelect.value;
                rate1.innerText = currencies[selectedFromCurrency];
            }
    
            toSelect.onchange = () => {
                const selectedToCurrency = toSelect.value;
                rate2.innerText = currencies[selectedToCurrency];
            }
    
            amount.oninput = () => {
                const selectedFromCurrency = fromSelect.value;
                const selectedToCurrency = toSelect.value;
                result.innerText = ((currencies[selectedToCurrency] / currencies[selectedFromCurrency]) * amount.value).toFixed(4);
            }

        })
}

{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
            //Ця функція запускається коли дані завантажуються.
             //Інший код працює РАНШЕ.
             console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
    
            const countries = Object.keys(data);
            const response = data;

            for (const country of countries) {
                const countryOption = document.createElement("option");
                countryOption.innerText = country;
                countriesId.appendChild(countryOption);
            }

            countriesId.onchange = () => {
                const selectedCountry = countriesId.value;
                citiesId.innerHTML = '';
                for (const city of response[selectedCountry]) {
                    const cityOption = document.createElement("option");
                    cityOption.innerText = city;
                    citiesId.appendChild(cityOption);
                }
            }
           
    })
}