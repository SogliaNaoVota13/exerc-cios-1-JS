let resposta = document.getElementById('resposta')

function calcular(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)

    let somaTotal = 0, somaPar = 0, somaImpar = 0

    if(num1 % 2 == 0){
        somaPar += num1
        resposta.innerHTML = "O " + num1 + " é par" + "<br>"
    }else{
        resposta.innerHTML = "O " + num1 + " é ímpar" + "<br>"
        somaImpar += num1
    }

    if(num2 % 2 == 0){
        somaPar += num2
        resposta.innerHTML += "O " + num2 + " é par" + "<br>"
    }else{
        somaImpar += num2
        resposta.innerHTML += "O " + num2 + " é ímpar" + "<br>"
    }

    if(num3 % 2 == 0){
        somaPar += num3
        resposta.innerHTML += "O " + num3 + " é par" + "<br>"
    }else{
        somaImpar += num3
        resposta.innerHTML += "O " + num3 + " é ímpar" + "<br>"
    }

    somaTotal = num1 + num2 + num3

    resposta.innerHTML += "A soma dos números pares é igual: " + somaPar + "<br>"
    resposta.innerHTML +=  "A soma dos números ímpares é igual: " + somaImpar + "<br>"
    resposta.innerHTML +=  "A soma total é igual: " + somaTotal

}