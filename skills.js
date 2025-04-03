// function to convert celcius to fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

// driver code
const celcius = 25;
const fahrenheit = celciusToFahrenheit(celcius);
console.log(`${celcius}°C is equal to ${fahrenheit}°F`);