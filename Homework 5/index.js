
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
    console.log(multiTable[2][2])
}

{
    const multiTable = [[[0], [0], [0], [0], [0], [0]],
                        [[0], [1], [2], [3], [4], [5]], 
                        [[0], [2], [4], [6], [8], [10]], 
                        [[0], [3], [6], [9], [12], [15]], 
                        [[0], [4], [8], [12], [16], [20]], 
                        [[0], [5], [10], [15], [20], [25]]];
    let withoutZero = multiTable.slice(0 [0]); 
    console.log(withoutZero[2][2])
}