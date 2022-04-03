function criandoTabela() {

const main = document.getElementById('main'); //pega Main

const sectionCabecalho = document.createElement('section'); //cria section
sectionCabecalho.classList.add('cabecalho') //atribui CLASS cabeçalho

const h1 = document.createElement('h1');//cria h1 do cabeçalho
h1.innerText = "PIANO-GENIUS"; //atribui titulo ao cabeçalho

const sectionTeclasPretas = document.createElement('section');//cria section Teclas Pretas;
sectionTeclasPretas.classList.add('teclas_pretas'); //atribui CLASS para o box teclas Pretas;

const TeclaPreta1 = document.createElement('button');// cria DIV tecla preta1
TeclaPreta1.classList.add('teclaPreta1'); // atribui CLASS teclaPreta1;

const TeclaPreta2 = document.createElement('button'); //cria div tecla preta2
TeclaPreta2.classList.add('teclaPreta2'); //atribui class tecla preta 27
TeclaPreta2.innerText = 'PLAY'; //adicona texto 'play' ao button

const TeclaPreta3 = document.createElement('button'); //cria div tecla preta3
TeclaPreta3.classList.add('teclaPreta3');//atribui class para tecla preta3

const sectionContainerTeclado = document.createElement('section'); //cria section container teclas;
sectionContainerTeclado.classList.add('container_teclado'); //atribui classe 'container_teclado'

const tecla1 = document.createElement('button'); //cria div tecla1
tecla1.classList.add('tecla1')// atribui class 'tecla1'

const tecla2 = document.createElement('button'); //cria div tecla2
tecla2.classList.add('tecla2'); //atribui class 'tecla2'

const tecla3 = document.createElement('button'); //cria div tecla3
tecla3.classList.add('tecla3'); //atribui class 'tecla3'

const tecla4 = document.createElement('button'); //cria div tecla4
tecla4.classList.add('tecla4'); //atribui class tecla4



main.appendChild(sectionCabecalho); //coloca SectionCabeçalho como filha de main
main.appendChild(sectionTeclasPretas); //coloca sectionteclaspretas como filha de main
main.appendChild(sectionContainerTeclado); //coloca container teclado como filha de main

sectionCabecalho.appendChild(h1); //coloca h1 como filha de cabeçalho

sectionTeclasPretas.appendChild(TeclaPreta1); //coloca tecla como filha de sectionteclaspretas
sectionTeclasPretas.appendChild(TeclaPreta2);//coloca tecla como filha de sectionteclaspretas
sectionTeclasPretas.appendChild(TeclaPreta3); //coloca tecla como filha de sectionteclaspretas

sectionContainerTeclado.appendChild(tecla1); //coloca tecla como filha de container teclado
sectionContainerTeclado.appendChild(tecla2); //coloca tecla como filha de container teclado
sectionContainerTeclado.appendChild(tecla3);//coloca tecla como filha de container teclado
sectionContainerTeclado.appendChild(tecla4);//coloca tecla como filha de container teclado

}

criandoTabela();


const vermelho  = document.querySelector('.tecla1');
const amarelo = document.querySelector('.tecla2');
const verde = document.querySelector('.tecla3');
const azul = document.querySelector('.tecla4');

const button = document.querySelector('.teclaPreta2');

var arrayDaRodada = geraSequenciaAleatoria();


function geraNumeroAleatorio() {//Função que cria a sequencia de cores aleatóriamente
  return (Math.floor(Math.random() * 4));   

};

function geraSequenciaAleatoria() { 
    let arraySequencia = [];
    for(let i = 0; i < 5; i++){
        arraySequencia[i] = geraNumeroAleatorio();
    }
    return arraySequencia;
};


function brilhandoCores(){
    
    for(let j=0; j < arrayDaRodada.length; j++){
    if(arrayDaRodada[j] === 0){
     const interv1 = setTimeout(() => {vermelho.setAttribute('id','brilhaVermelho')},j * 1000);
     vermelho.removeAttribute('id');
    }else if(arrayDaRodada[j]  === 1){
       const interv2 = setTimeout(() => {amarelo.setAttribute('id','brilhaAmarelo')},j * 1000);
       amarelo.removeAttribute('id');
    } else if(arrayDaRodada[j]  === 2){
        const interv3 = setTimeout(() => {verde.setAttribute('id','brilhaVerde')}, j * 1000);
        verde.removeAttribute('id');
    }else if(arrayDaRodada[j] === 3) {
        const interv4 = setTimeout(()=>{azul.setAttribute('id','brilhaAzul')}, j * 1000);
        azul.removeAttribute('id');
    }
}
}


function iniciaJogo(){
    const sectionBoxResultado = document.createElement('section');// cria section box resultados
    sectionBoxResultado.setAttribute('id' , 'box_resultados'); //atribui class 'box_resultados'
    const h2 = document.createElement('h2');//cria h2 box resultados;
    h2.innerText = 'Prepare-se!!!'; 
    main.appendChild(sectionBoxResultado);//coloca box resultado como filha de main
    sectionBoxResultado.appendChild(h2); 

   setTimeout(brilhandoCores, 2000);
};

button.addEventListener("click", iniciaJogo);


