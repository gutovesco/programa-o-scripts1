var quantidade = 0;

var array = [];

var otimo = 0;
var bom = 0;
var regular = 0;
var ruim = 0;

function calcular() {

    quantidade += 1;

    let idade = parseInt(document.getElementById('idade').value);
    let opniao = parseInt(document.getElementById('Opniao').value);

    if (opniao === 1) {
        otimo += 1;
    } else if (opniao === 2) {
        bom += 1;
    } else if (opniao === 3) {
        regular += 1;
    } else if (opniao === 4) {
        ruim += 1;
    }

    array.push({
        idade: idade,
        opniao: opniao
    })

}

function result() {
    let element = document.getElementById('result');

    let ul = "<ul>";

    let auxBool = false;

    ul += `<li> Quatidade: ${quantidade} </li>`;

    let somaIdade = 0;

    let arrayIdadeNegativa = [];

    for (let i = 0; i < array.length; i++) {
        somaIdade += array[i].idade < 1 ? 0 : array[i].idade;

        if (array[i].idade < 1) {
            auxBool = true;
            arrayIdadeNegativa.push(array[i].idade);
        }

    }

    ul += `<li> Otimo: ${(otimo / quantidade) * 100}%</li>`;
    ul += `<li> Bom: ${(bom / quantidade) * 100}%</li>`;
    ul += `<li> Regular: ${(regular / quantidade) * 100}%</li>`;
    ul += `<li> Ruim: ${(ruim / quantidade) * 100}%</li>`;

    if (auxBool) {

        for (let i = 0; i < arrayIdadeNegativa.length; i++) {
            ul += `<li>Idade: ${arrayIdadeNegativa[i]}</li>`;
        }
    }

    ul += `<li> Media idade: ${somaIdade / quantidade} </li>`;

    ul += `</ul>`;

    element.innerHTML = ul;

}