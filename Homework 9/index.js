// {
//     let question;
    
//     while(question = !confirm('Ви любите пиво?')) {
           
//     }
//     alert('Я також)');
// }

// {
//     let arr = [];
//     let userInput;

//     while(userInput = prompt('Що ви хочите поставити у вашу скриньку?')) {
//         arr.push(userInput);
//     }
//     console.log(arr);
// }

// {
//     let arr = [];
//     let userInput;
//     let index = 0;

//     while (userInput = prompt('Що ви хочите поставити у вашу скриньку?')) {
//         arr[index] = userInput;
//         index++;
//     }

//     console.log(arr);
// }

// {
//     let index = 0
    
//     while(Math.random() < 0.9) {
//         index++
//         if(Math.random() > 0.9) {
//             break
//         }
//     }
//     console.log(index);
// }

// {
//     let question;
    
//     while(question = !confirm('Ви любите пиво?')) {
//         //пусто)
//     }
//     alert('Я також)');
// }

// {
//     let index = +prompt('Напишіть число для арифметичної прогресії та крок');
//     let progression = [1];
    
//     for(let i = 1; i < index; i++) {
//         progression.push(progression[i - 1] + index);
//     }
//     console.log(progression);
// }

// {
//     let index = +prompt('Ввудіть число ');
//     let str = '';
//     for(let i = 0; i <= index; i++) {
//         if(i % 2 === 0) {
//             str += '.';
//         }
//         else {
            
//             if(i === index) {
//                 str.slice(0, -1);
//             }
//             else {
//                 str += '#';
//             }
//         }
//     }
//     console.log(str);
// }

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