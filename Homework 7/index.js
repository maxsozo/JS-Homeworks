{
    function temperatureToFahrenheit(celsius) {
        let fahrenheit = ((celsius * 9) / 5) + 32;
        return fahrenheit
    }
    console.log(temperatureToFahrenheit(10))
}

{
    function RGB_background(red, green, blue) {
        let element = document.getElementById("bg"); 
       return element.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    RGB_background(50, 12, 100);
}

{
    function apartmentLocation(floors, apartmentOnFloor, numApartment) {
        let numEntrance = Math.ceil( numApartment / (floors * apartmentOnFloor));
    let numFloor = Math.ceil(( numApartment % (floors * apartmentOnFloor)) / apartmentOnFloor);
    return ('Квартира ' + numApartment + ' знаходится в ' + numEntrance + "-му під'їзді на " + numFloor + '-му поверсі');
    }
    console.log(apartmentLocation(4, 4, 81));
}