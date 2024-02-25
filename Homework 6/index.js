{
    let beer = {
        name: "Опілля",
        type: "Корифей",
        alcoholContent: 4.2,
        volume: 0.5,
        producingCountry: "Ukraine",
        prise: 32.40
    }

    let copybook = {
        color: "blue",
        pages: 24,
        freePages: 19
    }
}

{   
    let userKey1 = prompt("Введіть новий ключ");
    let userKey2 = prompt("Введіть новий ключ");
    
    let beer = {
        name: "Опілля",
        type: "Корифей",
        alcoholContent: 4.2,
        volume: 0.5,
        producingCountry: "Ukraine",
        prise: 32.40,
        userKey1: prompt("Введіть значення")
         
    }

    let copybook = {
        color: "blue",
        pages: 24,
        freePages: 19,
        userKey2: prompt("Введіть значення")
    }  
    console.log(beer.userKey1);
    console.log(copybook.userKey2);

    let quantity = prompt("Введіть кількість пляшок пива");
    let crate = {
        inside: beer,
        quantityBottles: quantity 
    }
}

{
    let userKey = prompt("Введіть новий атрибут")
    let body = {
        tagName: "body",
        children: [
            {
                tagName: "div",
                children: [
                    {
                        tagName: "span",
                        childrenSpan: ["Enter a data please:"]
                    },

                    {
                        tagName: "br/"
                    },

                    {
                        tagName: "input",
                        attrs:{
                                type: "text",
                                id: "name"
                            }
                    },

                    {
                        tagName: "input",
                        attrs:{
                                type: "text",
                                id: "surname"
                            }
                    }
                ]
            },
            {
                tagName: "div",
                children: [
                    {
                        tagName: "button",
                        children: ["Ok"],
                        attrs:{
                                id: "ok",
                                userKey: prompt("Введіть значення атрибута")
                            }
                    },

                    {
                        tagName: "button",
                        children: ["Cancel"],
                        attrs: {
                            id: "cancel"
                        }
                    }
                ]
            }
        ]
    }

    console.log(body.children[1].children[1].children[0]);
    console.log(body.children[0].children[3].attrs.id);

    body.children[0].parent = body;
    body.children[1].parent = body;
    body.children[0].children[0].parent = body.children[0];
    body.children[0].children[1].parent = body.children[0];
    body.children[0].children[2].parent = body.children[0];
    body.children[0].children[3].parent = body.children[0];
    body.children[0].children[2].attrs.parent = body.children[0].children[2];
    body.children[0].children[3].attrs.parent = body.children[0].children[3];

    body.children[1].children[0].parent = body.children[1];
    body.children[1].children[1].parent = body.children[1];
    body.children[1].children[0].attrs.parent = body.children[1].children[0];
    body.children[1].children[1].attrs.parent = body.children[1].children[1];
    
    let {children: [{children: [{ childrenSpan: childrenSpanArray }, , , { attrs: { id } }]}, {children: [{ children: childrenArray }, {}]}]} = body;
    
    console.log(childrenSpanArray);
    console.log(childrenArray);
    console.log(id);
}

{
    let arr = [1,2,3,4,5, "a", "b", "c"];
    let [odd1, even1, odd2, even2, odd3, ...literals] = arr
    console.log(odd1, odd2, odd3);
    console.log(even1, even2);
    console.log(literals);
}

{
    let arr = [1, "abc"]
    let [number, [s1, s2, s3]] = arr
    console.log(number);
    console.log(s1, s2, s3);
}

{
    let arr = [1,2,3,4, 5,6,7,10];
    let[a, b, ...rest] = arr
    let length = arr.length;
    console.log(a, b);
    console.log(length);
}

{
    let userKey1 = prompt("Введіть новий ключ");
    let beer = {
        name: "Опілля",
        type: "Корифей",
        alcoholContent: 4.2,
        volume: 0.5,
        producingCountry: "Ukraine",
        prise: 32.40,
        [userKey1]: prompt("Введіть значення")  
    }
    let {[userKey1]: value, ...newBeer} = beer;
    console.log(beer);
    console.log(newBeer); 
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
           //ця функція запускається коли дані завантажуються.
           //Інший код працює РАНIШЕ.
           //тільки тут є змінна data з завантаженими даними
           console.log(data) // Вивчіть структуру, що отримується з сервера в консолі

        const userPrompt = prompt('Введіть курс валюти яку бажаєте обміняти');
        if(userPrompt === null) {
            alert('Ви скасували операцію');
        }    
        let userInputRate = userPrompt.toUpperCase();
        const findRate = data.rates[userInputRate];

        if (!findRate) {
        alert('Ви не ввели нічого або ввели якусь діч');
       }
       else {
        const userPromptConversion = prompt('Введіть валюту на яку бажаєте обміняти');
        if(userPromptConversion === null) {
            alert('Ви скасували операцію');
        }
        let userInputConversion = userPromptConversion.toUpperCase();
        const findRateToConversion = data.rates[userInputConversion];
        if(!findRateToConversion) {
            alert('Ви не ввели нічого або ввели якусь діч');
        }
        else {
            const sum = prompt('Введіть суму');
            if(isNaN(sum) || !sum) {
                alert('Ви ввели якусь дичину або нічого не ввели');
            }
            else if(findRate > findRateToConversion) {
                alert((sum / findRate).toFixed(2))
            }
            else if(findRate < findRateToConversion) {
                alert((sum * findRateToConversion).toFixed(2))
            }
            else {
                alert(sum)
            }
        }
       }
    })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
       //ця функція запускається коли дані завантажуються.
       //Інший код працює РАНIШЕ.
       //тільки тут є змінна data з завантаженими даними
       console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
       
       let str = "<select>";
       let currencies = Object.keys(data.rates);
        for(currency of currencies){
            str += `<option value="${currency}">${currency}</option>`;
        }
       str += "</select>";
       document.write(str);

    })
        
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        //ця функція запускається коли дані завантажуються.
        //Інший код працює РАНIШЕ.
        //тільки тут є змінна data з завантаженими даними
        console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        
        const currencyKeys = Object.keys(data.rates);
        const currencies = data.rates;

        let str = "<table border='1'>";
        str += "<th></th>";
        for (const currency of currencyKeys) {
            str += "<th>" + currency + "</th>";
        }

        for (const currencyOuter of currencyKeys) {
            str += `<tr><th>${currencyOuter}</th>`;

            for (const currencyInner of currencyKeys) {
                if (currencyOuter === currencyInner) {
                    str += "<td>1.00</td>";
                } else {
                    const rates = 1 / currencies[currencyOuter] * currencies[currencyInner];
                    str += `<td>${rates.toFixed(4)}</td>`;
                }
            }
        }

        str += "</table>";
        document.write(str);
    })

}

{
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
  }

    let str = "<form>";
  
    for(const keys in car){
        str += `<label> ${keys}: <input type="${(typeof car[keys] === 'number') ? 'number' : (typeof car[keys] === 'string') ? 'text' : 'checkbox' }" value="${car[keys]}"/></label>`
    }

    str += "</form>";
    document.write(str);
}

{
    const persons = [
        {
           "Name":"chevrolet chevelle malibu",
           "Cylinders":8,
           "Displacement":307,
           "Horsepower":130,
           "Weight_in_lbs":3504,
           "Origin":"USA"
        },
        {
           "Name":"buick skylark 320",
           "Miles_per_Gallon":15,
           "Cylinders":8,
           "Displacement":350,
           "Horsepower":165,
           "Weight_in_lbs":3693,
           "Acceleration":11.5,
           "Year":"1970-01-01",
        },
        {
           "Miles_per_Gallon":18,
           "Cylinders":8,
           "Displacement":318,
           "Horsepower":150,
           "Weight_in_lbs":3436,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
        {
           "Name":"amc rebel sst",
           "Miles_per_Gallon":16,
           "Cylinders":8,
           "Displacement":304,
           "Horsepower":150,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
     ];

const arrKeys = [];
let str = "<table border='1'>";

for (const obj of persons) {
    for (const key in obj) {
        if (!arrKeys.includes(key)) {
           str += `<th>${key}</th>`; 
            arrKeys.push(key);
        }
    }
}
    for(const person of persons) {
        str += `<tr>`;
        for(const key of arrKeys){
            str += `<td>${person[key] === undefined ? '' : person[key] }</td>`
        }
    }
    
str += "</tabel>"; 
document.write(str);
}