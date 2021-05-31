// regra de negocios:
// Carne - 400gr por pessoa ---               + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa ---            + de 6 horas - 2000ml
// Refrigerente/Agua -  1000ml por pessoa --- + de 6 horas - 1500ml
// criança equivale a 0.5


function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function calcular(){
    let qtdAdulto = inputAdultos.value;
    let qtdCrianca = inputCrianca.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebida = bebidaPP(duracao);


    let qtdTotalCarne = (carne * qtdAdulto + (carne / 2 * qtdCrianca)) / 1000;
    console.log("Carne: " + qtdTotalCarne);

    let qtdTotalCerveja = Math.ceil((cerveja * qtdAdulto) / 355); //qtd de cerveja convertida em latas de 355ml arrendado pra cima.
    console.log("Cerveja: " + qtdTotalCerveja);

    let qtdBebida = Math.ceil(bebida * qtdAdulto + (bebida / 2 * qtdCrianca))/ 2000;
    console.log("Bebida: " + qtdBebida);


    resultado.innerHTML = `<p>${qtdTotalCarne}KG de carne.</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja} Latas de cerveja.</p>`
    resultado.innerHTML += `<p>${qtdBebida} Pet's de 2L de bebida.</p>`
}

let inputAdultos = document.getElementById("qtdAdulto");
let inputCrianca = document.getElementById("qtdCrianca");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");