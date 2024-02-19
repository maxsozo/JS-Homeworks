
{
    let answersArr = [confirm('Ви любите пиво?'), confirm('Займаєтесь спортом?'), confirm('Ви ходите в церкву?')];
    console.log(answersArr);    
}

{
    let answersArr = [];
    answersArr[0] = prompt('Як вас звати?');
    answersArr[1] = prompt('Введіть свою дату народження');
    answersArr[2] = prompt('Ви любите пиво?');
    console.log(answersArr);    
}

{
    let answersArr = [prompt('У вас є машина?')];
    console.log(answersArr[0]);
    console.log(answersArr.length);
    console.log(answersArr);
}

{
    let arr = [];
    let indexArr = prompt('Введіть індекс де повинен лежати вша текст у масиві');
    arr[indexArr] = prompt('Введіть що небуть');
    console.log(arr);
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    console.log(multiTable[2][2]);
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    let withoutZero = multiTable.slice(0 [0]); 
    console.log(withoutZero[2][2]);
}

{
    let arr = ['Маша', 'Петя', 'Іван', 'Вася', 'Настя'];
    let userWord = prompt('Введіть слово яке хочите найти в масиві');
    let check = arr.indexOf(userWord);
    if(check === -1) {
        console.log('Пошук не приніс результатів такого слова в масиві немє');
    }
    else {
        console.log(check);
    }
}

{
    let arr = [prompt('Введіть що небуть'), prompt('Введіть що небуть'), 
    prompt('Введіть що небуть'), prompt('Введіть що небуть'), prompt('Введіть що небуть'),]
    let arrReverse = [];
    let a = arr.pop();
    let b = arr.pop()
    let c = arr.pop()
    let d = arr.pop()
    let f = arr.pop()
    arrReverse.push(a, b, c, d, f);// також можна використати метод arr.reverse для легшого синтаксису але він не повернить новий масив а змінить його
    console.log(arrReverse);
}

{
    let arr = [prompt('Введіть що небуть'), prompt('Введіть що небуть'), 
    prompt('Введіть що небуть'), prompt('Введіть що небуть'), prompt('Введіть що небуть'),]
    let arrReverse = [];
    let a = arr.shift();
    let b = arr.shift()
    let c = arr.shift()
    let d = arr.shift()
    let f = arr.shift()
    arrReverse.unshift(f, d, c, b, a);
    console.log(arrReverse);
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    console.log(multiTable[2][2]); 
    let copyArr = [...multiTable];
    alert(copyArr);
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    let deepCopyArray = JSON.parse(JSON.stringify(multiTable)); // не маю поняття як по інакшому зробити ГЛИБОКЕ копіювання тому використав JSON я його вже вивчав раніше.
    console.log(deepCopyArray[2][2]);
}

{
    let arr1 = [];
    let arr2 = arr1;
    if(arr1 === arr2){
        console.log('Масиви рівні між собою');
    }
}

{
    const multiTable = [[[0], [0], [0], [0], [0]],
                        [[1], [2], [3], [4], [5]], 
                        [[2], [4], [6], [8], [10]], 
                        [[3], [6], [9], [12], [15]], 
                        [[4], [8], [12], [16], [20]], 
                        [[5], [10], [15], [20], [25]]];
    let copyArr = [...multiTable[1], ...multiTable[2], ...multiTable[3], ...multiTable[4], ...multiTable[5]];

    console.log(copyArr);
    console.log("Довжина масиву:", copyArr.length);    
}

{
    let userText = prompt('Введіть буть що');
    userText.split('');
    let [a, b, c, d, e, f, g, h, i] = userText;
    console.log(e, i);
}

{
    
}

{
    let namesArr =  ["John", "Paul", "George", "Ringo"];
    for (let name of namesArr){
        alert(name);
    }
}

{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";

    for (const currency of currencies) {
        str += `<option value="${currency}">${currency}</option>`;
    }

    str += "</select>";
    document.write(str);
}

{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";

    for (const name of names) {
        str += "<td>" + name + "</td>";
    }
    str += "</table>";
    document.write(str);
}

{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names) {
        str += "<p>" + name + "</p>";
    }
    str+= "</table>"
    document.write(str)
}

{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<table>";

    for (const currency of currencies) {
        str += "<tr>";
        for (const letter of currency) {
            str += "<td>" + letter + "</td>";
        }
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
                        
    let str = "<table>";
    for (const array of multiTable) {
        str += "<tr>";

        for (const cell of array) {
            let number = cell[0];
            let isEven = number % 2 === 0;
            let cellClass = isEven ? 'even' : 'odd';
            str += `<td class='${cellClass}'>${number}</td>`;
        }
        str += "</tr>";
    }
                    
    str += "</table>";
    document.write(str);
}

{
    const capitalize = str => {
        let result
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }

        result = words.join(' ');
        return result
   }
   console.log(capitalize("cANBerRa")) //Canberra
}

{
    let userText = prompt('Введіть пару слів');
    const capitalize = str => {
        let result
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }

        result = words.join(' ');
        return result
   }
   let userTextArray = userText.split(' ');
   let capitalizeMap = userTextArray.map(word => capitalize(word))
   console.log(capitalizeMap);
}

{
    const filterWords = (inputString, disallowedWords) => {
        let wordsArray = inputString.split(' ');
        let filteredWords = wordsArray.filter(word => !disallowedWords.includes(word.toLowerCase()));
        let resultString = filteredWords.join(' ');
    
        return resultString;
    }
    let userText = prompt('Введіть якийсь текст, розповідь');
    let badWords = ['блін', 'вафледрон', 'чурка', 'пітух', 'чорножопий'];
    let result = filterWords(userText, badWords);
    console.log(result);

}

{
    const censorWords = (inputString, forbiddenWords) => {
        let wordsArray = inputString.split(' ');
        let censoredWords = wordsArray.map(word => forbiddenWords.includes(word.toLowerCase()) ? 'BEEP' : word);
        let resultString = censoredWords.join(' ');
    
        return resultString;
    }
    let userText = prompt('Введіть якийсь текст, розповідь');
    let badWords = ['блін', 'вафледрон', 'чурка', 'пітух', 'чорножопий'];
    let result = censorWords(userText, badWords);
    console.log(result);
}