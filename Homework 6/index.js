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
}