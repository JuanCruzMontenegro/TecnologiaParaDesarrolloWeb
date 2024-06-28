const txtNum1 = document.getElementById("txtNum1")
const txtNum2 = document.getElementById("txtNum2")

const btnSumar = document.getElementById("btnSumar")
const btnRestar = document.getElementById("btnRestar")
const btnMultiplicar = document.getElementById("btnMultiplicar")
const btnDividir = document.getElementById("btnDividir")
const txtResultado = document.getElementById("txtResultado")

function Suma(num1, num2) {
    return num1 + num2;
}
function Resta(num1, num2) {
    return num1 - num2;
}
function Multiplicar(num1, num2) {
    return num1 * num2;
}
function Dividir(num1, num2) {
     return num1 / num2;
}

btnSumar.addEventListener('click', () => {
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    let resultado = Suma(num1, num2)
    txtResultado.innerText = "Resultado: " + resultado
})

btnRestar.addEventListener('click', () => {
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    let resultado = Resta(num1, num2)
    txtResultado.innerText = "Resultado: " + resultado
})

btnMultiplicar.addEventListener('click', () => {
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    let resultado = Multiplicar(num1, num2)
    txtResultado.innerText = "Resultado: " + resultado
})
btnDividir.addEventListener('click', () => {
    let num1 = Number(txtNum1.value)
    let num2 = Number(txtNum2.value)
    if (num2 === 0) {
        txtResultado.innerText = "No se puede dividir por cero"
    }
    else{
        let resultado = Dividir(num1, num2)
        txtResultado.innerText = "Resultado: " + resultado
    }
})