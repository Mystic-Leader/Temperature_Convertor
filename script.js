function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);

    if (fromUnit === toUnit) {
        resultElement.innerText = `Result: ${temperature} ${toUnit}`;
        return;
    }

    let convertedTemperature;

    switch (fromUnit) {
        case "celsius":
            if (toUnit === "fahrenheit") {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (toUnit === "kelvin") {
                convertedTemperature = temperature + 273.15;
            }
            break;
        case "fahrenheit":
            if (toUnit === "celsius") {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (toUnit === "kelvin") {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            }
            break;
        case "kelvin":
            if (toUnit === "celsius") {
                convertedTemperature = temperature - 273.15;
            } else if (toUnit === "fahrenheit") {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            }
            break;
        default:
            convertedTemperature = "Invalid";
    }

    resultElement.innerText = `Result: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
