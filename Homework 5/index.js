
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