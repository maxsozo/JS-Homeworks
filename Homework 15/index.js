{   
    function createTable(domElement, response) {
        const tag = document.createElement(domElement);
        tag.style.border = '1px solid black';
        document.body.appendChild(tag);
    
        const keysParameters = Object.keys(response);
    
        keysParameters.forEach((parameter) => {
            const paramsTh = document.createElement('th');
            paramsTh.style.border = '1px solid black';
            paramsTh.innerText = parameter;
            tag.appendChild(paramsTh);
        })
    
        const tr = document.createElement('tr');
        tag.appendChild(tr);
    
        const valueParameters = Object.values(response);
    
        valueParameters.forEach((parameter) => {
            const paramsTh = document.createElement('th');
            paramsTh.style.border = '1px solid black';
            
            function createFetchButton(url) {
                const button = document.createElement('button');
                button.innerText = 'Силка';
                button.addEventListener('click', () => {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {

                            tr.textContent = '';
                            createTable(domElement, data);
                        })
                });
                return button;
            };

            if (typeof parameter === 'string') {

                if (parameter.includes('https://swapi.dev/api/')) {
                    paramsTh.appendChild(createFetchButton(parameter));
                } else {
                    paramsTh.innerText = parameter;
                }
            } else if (Array.isArray(parameter)) {

                parameter.forEach(item => {
                    const itemContainer = document.createElement('th');
                    if (typeof item === 'string') {

                        if (item.includes('https://swapi.dev/api/')) {
                            itemContainer.appendChild(createFetchButton(item));
                        } else {

                            itemContainer.innerText = item;
                        }
                    }
                    paramsTh.appendChild(itemContainer);
                });
            }
    
            tr.appendChild(paramsTh);
        });
    }
    
    fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => { 
        createTable('table', luke);
    });
}

{
    function delay(ms) {
        return new Promise((fulfill, reject) => {
            setTimeout(() => fulfill(`Delay for delay: ${ms} ms`), ms);
        });
    }
    
    function fetchFromAPI() {
        return fetch('https://swapi.dev/api/people/1/')
            .then(response => response.json())
            .then(data => `Data from API: ${data.name}`);
    };
    
    Promise.race([delay(120), fetchFromAPI()])
        .then(result => console.log(result))
        .catch(error => console.error(error , 'Щось сє стресло'))
}

{
    function confirmPromise(text){
        let question = confirm(text);
        if(question) {
            
        }
    }
   
   confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
    () => console.log('respect за посидючість і уважність'))
}

{
    function confirmPromise(text) {
        return new Promise((resolve , reject) => {
            const result = confirm(text);
            if(result) {
                resolve('OK')
            }
            else {
                reject('Cancel')
            }
        });
    }
    
    confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
                                            () => console.log('respect за посидючість і уважність'))
}