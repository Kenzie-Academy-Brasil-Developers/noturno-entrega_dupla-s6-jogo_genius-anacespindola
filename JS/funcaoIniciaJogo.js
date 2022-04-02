//iniciar jogo
const button = document.querySelector('teclaPreta2');


function iniciaJogo(){
    const sectionBoxResultado = document.createElement('section');// cria section box resultados
    sectionBoxResultado.setAttribute('id' , 'box_resultados'); //atribui class 'box_resultados'
    const h2 = document.createElement('h2'); //cria h2 box resultados;
    main.appendChild(sectionBoxResultado);//coloca box resultado como filha de main
    sectionBoxResultado.appendChild(h2);
}

button.addEventListener('click', iniciaJogo);



