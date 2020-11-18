function calcular(){
    let fatorMultiplicador = 0
    let fatorMultiplicadorCarne = 0
    let unMedida = ""
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
    let paoAlho = (Number(adultos) + Number(criancas)) * 0.7 * duracaoMulti

    let divResultado = document.getElementsByClassName("divResultado")[0]
    let qntCarne = document.getElementById("qntCarne")
    let qntLing = document.getElementById("qntLing")
    let qntPanc = document.getElementById("qntPanc")
    let qntFrango = document.getElementById("qntFrango")
    let qntPao = document.getElementById("qntPao")
    let qntBeer = document.getElementById("qntBeer")
    let qntCoke = document.getElementById("qntCoke")

    divResultado.style.display = "block";



    if ( demais < 0.9 ){
        demais *= 1000
        unMedida = " g"
        fatorMultiplicador = 100
    }else{
        fatorMultiplicador = 0.5
        unMedida = " kg"
    }

    if ( carne < 0.9 ){
        carne *= 1000
        unMedidaCarne = " g"
        fatorMultiplicadorCarne = 100
    }else{
        fatorMultiplicadorCarne = 0.5
        unMedidaCarne = " kg"
    }

    demaisCarnes = Math.round(demais / fatorMultiplicador) * fatorMultiplicador + unMedida
    
    qntCarne.innerHTML = Math.round(carne / fatorMultiplicadorCarne) * fatorMultiplicadorCarne + unMedidaCarne
    qntLing.innerHTML = demaisCarnes
    qntPanc.innerHTML = demaisCarnes
    qntFrango.innerHTML = demaisCarnes
    qntPao.innerHTML = Math.ceil(paoAlho) + " un"
    qntBeer.innerHTML = Math.round((adultos * 7) * duracaoMulti) + " un"
    qntCoke.innerHTML = Math.ceil((((Number(adultos) + Number(criancas))) * 600) / 1000) + " L"
}