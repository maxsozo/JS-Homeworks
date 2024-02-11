
    {
        let userName = prompt("Введіть своє ім'я");
        alert(`Привіт ${userName}!!`);
    }


    {
        let text = prompt("Введіть текст, використовуйте коми");
        text = text.split(',').join('блін,');
        alert(text)
    }

    {
        let str = "cANBerRa cANBerRa cANBerRa cANBerRa";
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }

        let result = words.join(' ');
        console.log(result); //Canberra
    }

    {
        let str = prompt('Введвть якесь речення');
        str = str.split(' ');
        alert(str.length);
    }

    {
        let name = prompt("Введіть ім'я").trim();
        let lastName = prompt('Введіть своє прізвище').trim();
        let fatherName = prompt("Введіть і'мя по батьковi").trim();
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        fatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();
        let fullName = lastName + ' ' + name + ' ' + fatherName;
        alert(fullName);
    }

{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result;
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++){
        if(words[i] === 'пиво'){
            words[i] = 'чай'
        }
    }
    result = words.join(' ')
    console.log(result)
}

{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
    let result;
    let startWith = str.indexOf("<");
    let endWith = str.indexOf(">", startWith) + 1;
    result = str.slice( 0, startWith) + str.slice(endWith);
    console.log(result);
}

{
    let str = "якийсь текст у якому є один тег <br /> і всяке інше"
    let result;
    let startWith = str.indexOf("<");
    let endWith = str.indexOf(">", startWith) + 1;

    let newTag = str.slice(startWith, endWith).toUpperCase();
    
    result = str.slice(0, startWith) + newTag + str.slice(endWith);
    console.log(result)
}

{
    let str = prompt('Введіть текст якщо захочите що б текст був з нового рядка напишіть \\n');
    let newLine = str.split('\\n').join('\n');
    console.log(newLine);
}

{   
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    let userInput = prompt("Введіть текст із посиланням на YouTube:");
    let match = userInput.match(youtubeRegex);
    
    if (match && match[1]) {
      let videoId = match[1];
      let embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

      document.write(embedCode);
    } else {
    alert("Це не є силкою на Youtube");
    }
}