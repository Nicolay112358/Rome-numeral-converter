const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output')

convertBtn.addEventListener('click', () => {
    validationUserInput(number, output);
});

const validationUserInput = (input, elem) => {
    elem.style.fontSize = "2em";
    elem.style.color = "red";
    
    if (input.value === "") {
        elem.textContent = "Please enter a valid number";
    } else if (+input.value < 1) {
        elem.textContent = "Please enter a number greater than or equal to 1";
    } else if (+input.value > 3999){
        elem.textContent = "Please enter a number less than or equal to 3999"
    }
};