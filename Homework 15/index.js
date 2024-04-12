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
            paramsTh.innerText = parameter;
            tr.appendChild(paramsTh);
        })
    }

    fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => { 
        createTable('table', luke);
    
    })
}