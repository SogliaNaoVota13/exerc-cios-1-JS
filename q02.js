let resposta = document.getElementById('resposta')

function calcular(){
    let pressao = Number(document.getElementById('pressao').value)

    let resultado = pressao * 14.2233

    resposta.innerHTML = "O valor da pressão convertida é igual: " + resultado

}