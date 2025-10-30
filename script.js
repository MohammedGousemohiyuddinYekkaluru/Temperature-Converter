const celciusInput = document.querySelector('.celsius');
const kelvinInput = document.querySelector('.kelvin');
const farenheitInput = document.querySelector('.farenheit');

celciusInput.addEventListener('input',() => {
    let celsius = parseFloat(celciusInput.value);
    let kelvin = celsius + 273.15;
    let farenheit = (celsius * 9/5) + 32;
    kelvinInput.value = kelvin.toFixed(2);
    farenheitInput.value = farenheit.toFixed(2);
})

farenheitInput.addEventListener("input", () => {
    let farenheit = parseFloat(farenheitInput.value);
    let celsius = (farenheit - 32) * 5/9;
    let kelvin = (farenheit - 32) * 5/9 + 273.15;
    celciusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
})

kelvinInput.addEventListener('input', () => {
    let kelvin = parseFloat(kelvinInput.value);
    let celsius = kelvin - 273.15;
    let farenheit = (kelvin - 273.15) * 9/5 + 32;
    celciusInput.value = celsius.toFixed(2);
    farenheitInput.value = farenheit.toFixed(2);
})