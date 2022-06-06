//Criando a constante 'X' para buscar no seletor CSS uma classe chamada 'Y'
const zumbi = document.querySelector('.zumbi'); 
const tubo = document.querySelector('.tubo');


//Criei uma constante chamada 'pulo'
const pulo = () => { 

    //mandei a const 'pulo' adicionar a classe CSS 'pulo' no elemento com a classe 'zumbi'
    zumbi.classList.add('pulo'); 

    //remover a classe 'pulo' depois de 500ms
    setTimeout(() =>{

        zumbi.classList.remove('pulo')
        //perceba que eu usei praticamente a mesma linha de código para adicionar e para remover essa class, só muda o 'add' e o 'remove' depois da class list

    }, 500)
}

//Crio a constante gameOver e digo que seu valor é o ID 'game-over' que está no HTML
const gameOver = document.getElementById("game-over");

//Criando constante 'loop' e dando intervalo para checar os dados que estão contidos nela de 10 em 10 ms
const loop = setInterval(() => {

    const tuboPosicao = tubo.offsetLeft;

    const zumbiPosicao = +window.getComputedStyle(zumbi).bottom.replace('px', '');
     /*Criei a const 'zumbiPosicao' para fazer o computador ler a posição bottom que o zumbi está, pois preciso dessa informação para fazer com que o programa leia quando o zumbi está colidindo ou não com o 'tuboPosicao'.
     Eu pensei em usar a configuração 'zumbi.offsetBottom', porém o console me retorna o valor undefined com essa ferramenta para o bottom; então eu usei o 'window.getComputedStyle(zumbi)' que serviu para o programa fazer a leitura do estilo do elemento no site e agora quando eu uso o '.bottom', o programa já está lendo o pulo do zumbi.
     No entanto percebi que quando eu fazia o console do browser imprimir os valores do zumbi, ele imprimia em Número+px (ou seja, string), e eu quero valores só em números, dessa forma, usei o 'replace' e substitui o 'px' por um conjunto vazio (''). Mesmo fazendo isso, percebo que ainda está retornando valor em string, então eu coloco um '+' na frente do window, isso força a configuração a me enviar number (quando possível)*/
    
    
    //Falo que se as condições: 'tuboPosicao' é menor ou igual a 120px, 'tuboPosicao' maior que 0 e 'zumbiPosicao' menor que 80px, é pra executar os comandos abaixo
    if (tuboPosicao <= 120 && tuboPosicao > 0 && zumbiPosicao < 80) {

        //Buscar a animação do estilo do tubo e mudar seus valores para none
        tubo.style.animation = 'none';
        //Buscar o estilo do espaçamento que está sendo feito no tubo, e colocar ele igual ao 'tuboPosicao' (local onde o boneco vai bater) em pixels
        tubo.style.left = `${tuboPosicao}px`;

        //Buscar a animação do estilo do zumbi e mudar seus valores para none
        zumbi.style.animation = 'none';
        //Buscar o estilo do espaçamento que está sendo feito no zumbi, e colocar ele igual ao 'zumbiPosicao' (local onde o boneco vai bater) em pixels
        zumbi.style.bottom = `${zumbiPosicao}px`;

        // As três linhas de código abaixo servem para estilizar o CSS do zumbi quando a condição 'if' for aplicada
        zumbi.src = "/imgs/zumbi-morto.png" 
        zumbi.style.width = '150px'
        zumbi.style.margin =  '0px 0px -20px 0px'
       
        //Faço com quem a constante gameOver vire display block quando a condição acima for satisfeita
        gameOver.style.display = "block";

        clearInterval(loop); //Usei o clearInterval para fazer com que: "quando 'if' for aplicado, fazer a const 'loop' parar de checar os dados"

        document.addEventListener('keydown', reloadPage)      
 
    }
}, 10)
    




//Criei uma função para recarregar a página quando a variável 'evento' for acionada
const reloadPage = (evento) =>{ 

    //O botão para acionar a função 'evento' é o 'Space'
    if(evento.code === 'Space'){

        //Quando a condição acima for satisfeita, é pra dar reload na página
        window.location.reload()
    }
}

function reloadPeige(){
    window.location.reload();
}    




//Quando pressionar qualquer tecla do teclado é pra ativar a função 'pulo'
document.addEventListener('keydown', pulo);
//Quando clickar é pra ativar a função 'pulo'
document.addEventListener('click', pulo);