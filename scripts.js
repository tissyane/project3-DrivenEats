function selecionado (objeto, categoria) {

    const elemento = document.querySelector(`.${categoria}.escolhido`);
    
    if (elemento != null) {
        elemento.classList.remove("escolhido");
    }

    objeto.classList.add("escolhido")
}


