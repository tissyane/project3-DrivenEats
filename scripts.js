function selecionado(objeto, categoria) {
  const elemento = document.querySelector(`.${categoria}.escolhido`);

  if (elemento !== null) {
    elemento.classList.remove("escolhido");
  }

  objeto.classList.add("escolhido");
  checarBotao();
}

function checarBotao() {
  if (!isBtnActive) {
    prato = document.querySelector(".prato.escolhido");
    bebida = document.querySelector(".bebida.escolhido");
    sobremesa = document.querySelector(".sobremesa.escolhido");
    const botao = document.querySelector("footer div");
    isBtnActive = prato !== null && bebida !== null && sobremesa !== null;

    if (isBtnActive) {
      botao.classList.remove("off");
      botao.innerHTML = "Fechar pedido";
    }
  }
}

let prato = null
let bebida = null;
let sobremesa = null;
let isBtnActive = false;

function finalizarPedido () {
    if (isBtnActive) {
    const prato_nome = ('.prato .escolhido .item_title p' ).innerHTML;
    let prato_preco = '.prato span';
    let bebida_nome = '.bebida item_title';
    let bebida_preco = '.bebida span';
    let sobremesa_nome = '.sobremesa item_title';
    let sobremesa_preco = '.sobremesa span';
    const mensagem = `
            Olá, gostaria de fazer o pedido:
                Prato: ${prato_nome}
                Bebida: ${bebida_nome}
                Sobremesa: ${sobremesa_nome}`
    alert(mensagem);
    }

    




}

