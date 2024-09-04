let resposta = document.getElementById('resposta')

function calcular(){
    let bola = Number(document.getElementById('bola').value)
    let tenis = Number(document.getElementById('tenis').value)
    let bermuda = Number(document.getElementById('bermuda').value)

    let precoFinal = 0

    let valor = (bola * 31.59) + (tenis * 89.99) + (bermuda * 59.49)

    if(valor > 250){
        let desconto = valor * (7 / 100)
        precoFinal = valor - desconto
        resposta.innerHTML = "O valor total da compra é: " + precoFinal.toFixed(2) + "<br>"
        resposta.innerHTML += "Você teve um desconto de 7% nas compras"
    }else{
        resposta.innerHTML = "O valor total da compra é: " + valor.toFixed(2)
    }

}