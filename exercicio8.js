var candidato1 = 0;
var candidato2 = 0;
var branco = 0;
var nulo = 0;

function calcular() {
    let element = parseFloat(document.getElementById('Candidato').value);

    if (element === 1) {
        candidato1 += 1;
    } else if (element === 2) {
        candidato2 += 1;
    } else if (element === 3) {
        branco += 1;
    } else if (element === 4) {
        nulo += 1;
    }

}

function exibir() {
    let element = document.getElementById('result');
    let ul = "<ul>"

    let soma = candidato1 + candidato2 + branco + nulo;

    let perCand1 = (candidato1 / soma) * 100;
    ul += `<li>Votos do candidato 1: ${perCand1}%</li>`

    let perCand2 = (candidato2 / soma) * 100;
    ul += `<li>Votos do candidato 2: ${perCand2}%</li>`

    let perBranco = (branco / soma) * 100;
    ul += `<li>Voto em branco: ${perBranco}%</li>`

    let pernulo = (nulo / soma) * 100;
    ul += `<li>Votos nulo: ${pernulo}%</li>`
    ul += "</ul>"

    element.innerHTML = ul;

}