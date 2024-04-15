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

{
    function promptPromise(text) {
        return new Promise((resolve , reject) => {
            const name = prompt(text);
            if(name) {
                resolve(name);
            }
            else {
                reject('Cancel');
            }
        });
    }
    
    promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
                                       () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))
}

{
    function LoginForm(parent) {
        const form = document.createElement('form');
        parent.appendChild(form);
    
        function Password(open) {
            const input = document.createElement('input');
            input.type = open ? 'text' : 'password';
            form.appendChild(input);
    
            const checkBox = document.createElement('button');
            checkBox.textContent = open ? 'сховати' : 'показати';
            form.appendChild(checkBox);
    
            input.addEventListener('input', () => {
                if (typeof this.onChange === 'function') {
                    this.onChange(input.value);
                }
            });
    
            checkBox.addEventListener('click', () => {
                open = !open;
                input.type = open ? 'text' : 'password';
                checkBox.textContent = open ? 'сховати' : 'показати';
    
                if (typeof this.onOpenChange === 'function') {
                    this.onOpenChange(open);
                }
            });
    
            this.setValue = function(value) {
                input.value = value;
            };
    
            this.getValue = function() {
                return input.value;
            };
    
            this.setOpen = function(newState) {
                open = newState;
                input.type = open ? 'text' : 'password';
                checkBox.textContent = open ? 'сховати' : 'показати';
    
                if (typeof this.onOpenChange === 'function') {
                    this.onOpenChange(open);
                }
            };
    
            this.getOpen = function() {
                return open;
            };
        }
    
        const usernameInput = new Password(false);
        const passwordInput = new Password(true);
    
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        form.appendChild(submitButton);
    
        function checkInputs() {
            const username = usernameInput.getValue();
            const password = passwordInput.getValue();
            submitButton.disabled = !(username && password);
        }
    
        usernameInput.onChange = checkInputs;
        passwordInput.onChange = checkInputs;
    
        checkInputs();
    
        const promise = new Promise((resolve, reject) => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const username = usernameInput.getValue();
                const password = passwordInput.getValue();
                resolve({ login: username, password: password });
            });
        });
    
        this.then = promise.then.bind(promise);
    }
    
    function loginPromise(parent) {
        return new LoginForm(parent);
    }

    loginPromise(document.body).then(({ login, password }) => console.log(`Ви ввели ${login} та ${password}`));
}