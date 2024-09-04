let resposta = document.getElementById('resposta')

function calcular(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)

    if((num1 % 3 == 0)&&(num1 % 5 == 0)){
        resposta.innerHTML = "O " + num1 + " é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }else{
        resposta.innerHTML = "O " + num1 + " NÃO é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }

    if((num2 % 3 == 0)&&(num2 % 5 == 0)){
        resposta.innerHTML += "O " + num2 + " é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }else{
        resposta.innerHTML += "O " + num2 + " NÃO é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }

    if((num3 % 3 == 0)&&(num3 % 5 == 0)){
        resposta.innerHTML += "O " + num3 + " é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }else{
        resposta.innerHTML += "O " + num3 + " NÃO é divisível por 3 e 5 ao mesmo tempo" + "<br>"
    }

}