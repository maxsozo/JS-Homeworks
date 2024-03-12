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