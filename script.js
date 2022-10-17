function selecionaitem(item, verificado){
    const escolhido = document.querySelector(item);
    const check = document.querySelector(verificado);
    escolhido.classList.toggle('selecionado');    
    check.classList.toggle('check');

}