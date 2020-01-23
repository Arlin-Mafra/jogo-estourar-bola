
var intervalo;

//gerar bolas com cores aleatórias
function criarBola(){
    var bola = document.createElement('div');
    bola.setAttribute("class" , "bola");
    
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 500);

    bola.setAttribute("style" , "left:" +p1+"px; top:" +p2+"px; background-color:" + gera_cor()+";");
 
    bola.setAttribute("onclick", "estourar(this)");
    
    document.body.appendChild(bola);

}


function estourar(obj){

    document.body.removeChild(obj);

}


function gerarBola(){
    intervalo = setInterval(criarBola , 1000);
    
}

function pararBola(){
    
    //window.location.href = window.location.href;
      
    clearInterval(intervalo);
    
}

function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}



function limpaTela(){
    
    window.location.href = window.location.href;
    
}