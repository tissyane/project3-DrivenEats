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
    const prato_nome = prato.querySelector('.item_title').textContent;
    const bebida_nome = bebida.querySelector('.item_title').textContent;
    const sobremesa_nome = sobremesa.querySelector('.item_title').textContent;
    const prato_preco = Number.parseFloat((prato.querySelector('span').textContent).replace(",", "."));
    const bebida_preco = Number.parseFloat((bebida.querySelector('span').textContent).replace(",", "."));
    const sobremesa_preco = Number.parseFloat((sobremesa.querySelector('span').textContent).replace(",", "."));
    const total = (prato_preco + bebida_preco + sobremesa_preco);
    resultado = total.toFixed(2).replace(".", ",");
    const mensagem = encodeURIComponent(`gostaria de fazer o pedido:\n- Prato: ${prato_nome}\n- Bebida: ${bebida_nome}\n- Sobremesa: ${sobremesa_nome}\n Total: R$ ${resultado}`);
       
    let url = (`https://api.whatsapp.com/send?phone=5548991631164&text= Olá, ${mensagem}`);

    window.open(url);

    }

}
