const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const romeNum = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["c", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

convertBtn.addEventListener('click', () => {
    displayResult(number, output);
});

const displayResult = (input, elem) => {
    elem.style.fontSize = "2em";
    elem.style.color = "red";
    
    if (input.value === "") {
        elem.textContent = "Please enter a valid number";
    } else if (+input.value < 1) {
        elem.textContent = "Please enter a number greater than or equal to 1";
    } else if (+input.value > 3999){
        elem.textContent = "Please enter a number less than or equal to 3999";
    } else {
        elem.style.fontSize = "3em";
        elem.style.color = "gold";
        elem.textContent = trimZerosFromBeginnig(input.value);
    }
};

const trimZerosFromBeginnig = (num) => {
    let arrNum = num.split("");
    let arabickNum = []; 
    let tuggle = false;
        
    for(let i = 0; i < arrNum.length; i++) {      
        if (+arrNum[i] !== 0) tuggle = true;
        if (tuggle === true) arabickNum.push(+arrNum[i]);
    }

    return arabickNum;
};  