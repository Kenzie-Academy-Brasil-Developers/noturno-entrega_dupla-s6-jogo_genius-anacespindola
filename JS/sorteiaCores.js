const vermelho = document.querySelector('.tecla1');
const amarelo = document.querySelector('.tecla2');
const verde = document.querySelector('.tecla3');
const azul = document.querySelector('.tecla4');

const data = [vermelho, amarelo, verde, azul];


function animaCores(botao, cor){
    botao.classList.add(`animacao${cor}`)
    setTimeout(()=>{
        botao.classList.remove(`animacao${cor}`)
    }, 1000)
};



