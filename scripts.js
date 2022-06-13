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

let prato = null;
let bebida = null;
let sobremesa = null;
let isBtnActive = false;

function confirmarDados(){
  
  nome = prompt("Qual é o seu nome?");
  endereco = prompt("Qual é o seu endereço?");

  validarPedido ();
}

function validarPedido() {
  if (isBtnActive) {
    const ativar = document.querySelector(".pedido");
    ativar.classList.remove("escondido");

    const itensPedido = document.querySelector(".itens_pedido");

    prato_nome = prato.querySelector(".item_title").textContent;
    const pratofinal = itensPedido.querySelector(".pratoSelecionado");
    pratofinal.innerHTML = prato_nome;
    prato_preco = parseFloat(
      prato.querySelector("span").textContent.replace(",", ".")
    );
    const precoPratoFinal = itensPedido.querySelector(".prato-preco");
    precoPratoFinal.innerHTML = prato_preco.toFixed(2).replace(".", ",");

    bebida_nome = bebida.querySelector(".item_title").textContent;
    const bebidafinal = itensPedido.querySelector(".bebidaSelecionado");
    bebidafinal.innerHTML = bebida_nome;
    bebida_preco = parseFloat(
      bebida.querySelector("span").textContent.replace(",", ".")
    );
    const precobebidaFinal = itensPedido.querySelector(".bebida-preco");
    precobebidaFinal.innerHTML = bebida_preco.toFixed(2).replace(".", ",");

    sobremesa_nome = sobremesa.querySelector(".item_title").textContent;
    const sobremesafinal = itensPedido.querySelector(".sobremesaSelecionado");
    sobremesafinal.innerHTML = sobremesa_nome;
    sobremesa_preco = parseFloat(
      sobremesa.querySelector("span").textContent.replace(",", ".")
    );
    const precosobremesaFinal = itensPedido.querySelector(".sobremesa-preco");
    precosobremesaFinal.innerHTML = sobremesa_preco
      .toFixed(2)
      .replace(".", ",");

    total = (prato_preco + bebida_preco + sobremesa_preco)
      .toFixed(2)
      .replace(".", ",");
    const valorFinal = itensPedido.querySelector(".preco_Total");
    valorFinal.innerHTML = `R$ ${total}`;
  }
}

function finalizarPedido() {
  const mensagem = encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n- Prato: ${prato_nome}\n- Bebida: ${bebida_nome}\n- Sobremesa: ${sobremesa_nome}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`
  );
  let url = `https://api.whatsapp.com/send?phone=5548991631164&text=${mensagem}`;
  window.open(url);
}

function cancelarPedido() {
  const cancelar = document.querySelector(".pedido");
  cancelar.classList.add("escondido");
}


