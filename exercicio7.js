function mostrar(){

    let element = document.getElementById('result');

    let ul = "<ul>"
    for(let i = 1; i < 501; i++){
        if((i % 5) === 0){
            ul += `<li> Valor: ${i} </li>` 
        }
    }
    ul += "</ul>";

    element.innerHTML = ul;

}