let bCalcPropina = document.getElementById('bCalcPropina');
let bCalc = document.getElementById('bCalc');
let bBorrar = document.getElementById('bBorrar');
let bBorrarP = document.getElementById('bBorrarP');
let inputCalc = document.getElementById('inputCalc');
let inputPropina = document.getElementById('inputPropina');
let mostrarPrpna = document.getElementById('mostrarPrpna');

function Valores(n) {
    inputCalc.textContent += n;
};

function valPropina(n) {
    inputPropina.textContent += n;
};

function Calc() {
    inputCalc.textContent = Function("return " + inputCalc.textContent)();
};

function Propina() {
    let propina = inputPropina.textContent;
    let result = inputCalc.textContent;
     if (propina == '' || result == '') {
        alert('Primero debe llenar los espacios');
     } else {
            propina = propina / 100;
            result =  Function("return " + result)();
            mostrarPrpna.textContent = result * propina;      
     }
};

bCalc.addEventListener('click', () => Calc());

bCalcPropina.addEventListener('click', () => Propina());

bBorrar.addEventListener('click', function () {
    inputCalc.textContent = '';
});

bBorrarP.addEventListener('click', function () {
    inputPropina.textContent = '';
    mostrarPrpna.textContent = '';
});