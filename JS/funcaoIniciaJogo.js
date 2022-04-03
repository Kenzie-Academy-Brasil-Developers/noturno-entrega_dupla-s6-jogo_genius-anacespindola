
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
    }else if(arrayDaRodada[j]  === 1){
       const interv2 = setTimeout(() => {amarelo.setAttribute('id','brilhaAmarelo')},j * 1000);
    } else if(arrayDaRodada[j]  === 2){
        const interv3 = setTimeout(() => {verde.setAttribute('id','brilhaVerde')}, j * 1000);
    }else if(arrayDaRodada[j] === 3) {
        const interv4 = setTimeout(()=>{azul.setAttribute('id','brilhaAzul')}, j * 1000);
    }
}
};


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

