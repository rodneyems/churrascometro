function calcular(){
    let adultos = document.getElementById("adulto").value
    let criancas = document.getElementById("crianca").value
    let duracao = document.getElementById("duracao").value * 60
    let duracaoMulti = duracao / 240
    console.log(duracaoMulti)

    if ( duracaoMulti <= 1 ){
        duracaoMulti = 1
    }
    
    let totalAlimento = (((450 * adultos) + (200 * criancas)) * duracaoMulti) / 1000
    let carne = totalAlimento * 0.4
    let demais = totalAlimento * 0.2
    let paoAlho = (Number(adultos) + Number(criancas)) * 1.5

    let divResultado = document.getElementsByClassName("divResultado")[0]
    let qntCarne = document.getElementById("qntCarne")
    let qntLing = document.getElementById("qntLing")
    let qntPanc = document.getElementById("qntPanc")
    let qntFrango = document.getElementById("qntFrango")
    let qntPao = document.getElementById("qntPao")

    divResultado.style.display = "block";

    qntCarne.innerHTML = carne.toFixed(2) + " KG"
    qntLing.innerHTML = demais.toFixed(2) + " KG"
    qntPanc.innerHTML = demais.toFixed(2) + " KG"
    qntFrango.innerHTML = demais.toFixed(2) + " KG"
    qntPao.innerHTML = Math.ceil(paoAlho.toFixed(2)) + " Un"

}