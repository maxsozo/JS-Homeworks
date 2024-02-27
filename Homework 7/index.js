{
    function temperatureToFahrenheit(celsius) {
        let fahrenheit = ((celsius * 9) / 5) + 32;
        return fahrenheit
    }
    console.log(temperatureToFahrenheit(10))
}

{
    function RGB_background(red, green, blue){
        let element = document.getElementById("bg"); 
       return element.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    RGB_background(50, 12, 100);
}