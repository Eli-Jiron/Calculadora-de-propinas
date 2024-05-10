let bCalcPropina = document.getElementById('bCalcPropina');
let bCalc = document.getElementById('bCalc');
let bBorrar = document.getElementById('bBorrar');
let bBorrarP = document.getElementById('bBorrarP');
let inputCalc = document.getElementById('inputCalc');
let inputPropina = document.getElementById('inputPropina');
let mostrarPrpna = document.getElementById('mostrarPrpna');
let prmerClick = true

function Valores(n) {
    inputCalc.textContent += n;
    prmerClick = true

};

function ValoresOp(op) {
    if (prmerClick == true) {
        inputCalc.textContent += op
        prmerClick = false
    }
}

function valPropina(n) {
    inputPropina.textContent += n;
};

function Calc() {
    inputCalc.textContent = Function("return " + inputCalc.textContent)();
    if (inputCalc.textContent == Infinity) {
        inputCalc.textContent = 'No puedes repartir manzanas entre 0 amigos'
    }
};

function Propina() {
    let propina = inputPropina.textContent;
    let result = inputCalc.textContent;
    let resultP 
     if (propina == '' || result == '') {
        alert('Primero debe llenar los espacios');
     } else {
            propina = propina / 100;
            result = Function("return " + result)();
            resultP = result * propina;    
            mostrarPrpna.textContent = resultP + result  
     }
     if (result == Infinity || result == '0') {
        inputPropina.textContent = ''
        mostrarPrpna.textContent = 'No puedes sacar el % de 0 manzanas'
    }
};

bCalc.addEventListener('click', () => Calc());

bCalcPropina.addEventListener('click', () => Propina());

bBorrar.addEventListener('click', function () {
    inputCalc.textContent = '';
    prmerClick = true
});

bBorrarP.addEventListener('click', function () {
    inputPropina.textContent = '';
    mostrarPrpna.textContent = '';
});