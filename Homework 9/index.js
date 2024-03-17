{
    let question;
    
    while(question = !confirm('Ви любите пиво?')) {
           
    }
    alert('Я також)');
}

{
    let arr = [];
    let userInput;

    while(userInput = prompt('Що ви хочите поставити у вашу скриньку?')) {
        arr.push(userInput);
    }
    console.log(arr);
}

{
    let arr = [];
    let userInput;
    let index = 0;

    while (userInput = prompt('Що ви хочите поставити у вашу скриньку?')) {
        arr[index] = userInput;
        index++;
    }

    console.log(arr);
}

{
    let index = 0
    
    while(Math.random() < 0.9) {
        index++
        if(Math.random() > 0.9) {
            break
        }
    }
    console.log(index);
}

{
    let question;
    
    while(question = !confirm('Ви любите пиво?')) {
        //пусто)
    }
    alert('Я також)');
}

{
    let index = +prompt('Напишіть число для арифметичної прогресії та крок');
    let progression = [1];
    
    for(let i = 1; i < index; i++) {
        progression.push(progression[i - 1] + index);
    }
    console.log(progression);
}

{
    let index = +prompt('Вeудіть число ');
    let str = '';
    for(let i = 0; i <= index; i++) {
        if(i % 2 === 0) {
            str += '.';
        }
        else {
            
            if(i === index) {
                str.slice(0, -1);
            }
            else {
                str += '#';
            }
        }
    }
    console.log(str);
}

{
    let str = '';
    for(let j = 0; j < 10; j++){
        str += ' \n';
    
    for(let i = 0; i < 10; i++) {
        str += i
    }
    }
    console.log(str);
}

{
    let index1 = +prompt('Ввeдіть число по горизонталі');
    let str = '';
    const index2 = +prompt('Ввeдіть число по вертикалі');
    for(let i = 0; i < index2; i++) {
        str += ' \n';
        for(let j = 0; j <= index1; j++) {
            if((i + j) % 2 === 0) {
                str += '.';
            }
            else {
                str += '#';
            }
        }
    }
    console.log(str);
}

{
    let index = +prompt('Напишіть число для прогресії ступеня');
    let progression = [0];
    
    for(let i = 1; i < index; i++) {
        progression.push(Math.pow(i, index))
    }
    console.log(progression);
}

{
    let arr = [];
    for(let i = 0; i < 5; i++) {
        arr[i] = []; 
        for(let j = 0; j < 5; j++) {
            arr[i].push(i * j);
        }
    }
    console.log(arr);
}

{   
    
    function readArrayOfObjects() {
        let question;
        let arr = {};
        while(question= confirm('бажаєте продовжити?')) {
            const userInputKey = prompt('Введіть ключ до обєкта');
            const userInputValue = prompt('Введіть значення до ключа');
            arr[userInputKey] = userInputValue;
        }
        console.log(arr);
    }
    readArrayOfObjects()
}

{
    let size = +prompt('Введіть розмір ромба');  
    let center = Math.floor(size / 2);

    for (let i = 0; i < size; i++) {
        let str = '';
        let dots = Math.abs(center - i);
        let hashes = size - 2 * dots;

        for (let j = 0; j < dots; j++) {
            str += '.';
        }

        for (let k = 0; k < hashes; k++) {
            str += '#';
        }

        for(let l = 0; l < dots; l++) {
            str += '.';
        }

        console.log(str);
    }
}

{   
    const table = document.createElement("table");
    document.body.appendChild(table);
    table.style.border = '1px solid black';
    let arr = [];
    for(let i = 1; i < 10; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        tr.innerText = arr;
        for(let j = 1; j < 10; j++) {
            const td = document.createElement('td');
            td.style.border = '1px solid black';
            td.innerText = i * j;
            tr.appendChild(td);

            td.addEventListener('mouseover', function() {
                td.style.backgroundColor = 'red';
            });
            
            td.addEventListener('mouseout', function() {
                td.style.backgroundColor = ''; 
            });
        }
    }
}