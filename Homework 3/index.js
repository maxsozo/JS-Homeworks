
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
        let str = "cANBerRa";
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        console.log(result) //Canberra
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