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
        userKey1: prompt("Введіть значення"),
         
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
                        children: ["Enter a data please:"]
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
}