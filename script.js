var numSort = []
var cont = 0
var numEsco = []

function sorteio() {
    cont = 0;
    while (cont < 6) {
        let num = Math.random() * 60
        num = Math.ceil(num)
        if (!numSort.includes(num)) {
            numSort[cont] = num
            console.log(numSort)
            cont++
        }
    }
    document.getElementById("sorteados").innerHTML = numSort
    contacertos()
}

function getvalor(valor, pos) {
    valor = Number(valor)
    if (valor < 0 || valor > 60) {
        alert("Numero inválido\n Por favor, digite um úmero entre 1 e 60")
        document.getElementById(`num${pos + 1}`).value = ""
    } else if (numEsco.includes(valor)) {
        alert("Numero repetido, por favor escolha outro número! \n obs: entre 1 e 60")
        document.getElementById(`num${pos + 1}`).value = ""
    } else {
        numEsco[pos] = valor
        console.log(numEsco)
    }


}
function contacertos() {
    let conta = 0
    numEsco.forEach(function (value, index) {
        if (numSort.includes(value)) {
            conta = conta + 1
        }
    })
    document.getElementById("acertos").innerHTML = conta
}