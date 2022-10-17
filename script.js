let comida;
let bebida;
let sobremesa;
let total;
function selecionaprato(item, verificado){
    //verificar se entre os itens com classe selecionado está algum com classe principal. se tiver, remove
    const selecionadoAntes = document.querySelector('.pratoprincipal .selecionado');
    if(selecionadoAntes !==null){
        const icone = document.querySelector('.selecionado .icone');
        icone.classList.add('check');
        selecionadoAntes.classList.remove('selecionado');
    }

    const escolhido = document.querySelector(item);
    const check = document.querySelector(verificado);
    escolhido.classList.add('selecionado');    
    check.classList.remove('check');
    const nomeComida = document.querySelector('.pratoprincipal .selecionado .item');
    comida = nomeComida.innerHTML;
    const valorComida = document.querySelector('.pratoprincipal .selecionado .valor');
    let valor = valorComida.innerHTML;
    valor = parseFloat(valor);
    total = valor;
    confirmar();

}

function selecionabebida(item, verificado){
    //verificar se entre os itens com classe selecionado está algum com classe principal. se tiver, remove
    const selecionadoAntes = document.querySelector('.opcoesdebebida .selecionado');
    if(selecionadoAntes !==null){
        const icone = document.querySelector('.opcoesdebebida .selecionado .icone');
        icone.classList.add('check');
        selecionadoAntes.classList.remove('selecionado');
    }

    const escolhido = document.querySelector(item);
    const check = document.querySelector(verificado);
    escolhido.classList.add('selecionado');    
    check.classList.remove('check');
    const nomeBebida = document.querySelector('.opcoesdebebida .selecionado .item');
    bebida = nomeBebida.innerHTML;
    const valorBebida = document.querySelector('.opcoesdebebida .selecionado .valor');
    let valor = valorBebida.innerHTML;
    valor = parseFloat(valor);
    total = total + valor
    confirmar();

}
function selecionasobremesa(item, verificado){
    //verificar se entre os itens com classe selecionado está algum com classe principal. se tiver, remove
    const selecionadoAntes = document.querySelector('.opcoesDeSobremesa .selecionado');
    if(selecionadoAntes !==null){
        const icone = document.querySelector('.opcoesDeSobremesa .selecionado .icone');
        icone.classList.add('check');
        selecionadoAntes.classList.remove('selecionado');
    }

    const escolhido = document.querySelector(item);
    const check = document.querySelector(verificado);
    escolhido.classList.add('selecionado');    
    check.classList.remove('check');
    const nomeSobremesa = document.querySelector('.opcoesDeSobremesa .selecionado .item');
    sobremesa = nomeSobremesa.innerHTML;
    const valorSobremesa = document.querySelector('.opcoesDeSobremesa .selecionado .valor');
    let valor = valorSobremesa.innerHTML;
    valor = parseFloat(valor);
    total = total + valor
    
    confirmar();

}
//função de confirmar pedido
function confirmar(){
    //se 1 item de cada categoria selecionado, habilitar botão
    if(comida!== undefined){
        if(bebida!== undefined){
            if(sobremesa!==undefined){
                const botaoHabilitado = document.querySelector('.arredondada');
                botaoHabilitado.classList.add('botao');
                
            }
        }
    }
}