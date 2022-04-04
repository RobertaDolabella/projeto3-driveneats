let comidaSelecionada= null;
let bebidaSelecionada= null;
let sobremesaSelecionada= null;
let com;
let beb;
let sob;
let compreco;
let bebpreco;
let sobpreco;

function comidaSelecao(elemento){

 const itemSelecionado = document.querySelector(".comida .selecionado")
 if(itemSelecionado == elemento){
    itemSelecionado.classList.remove("selecionado")
    comidaSelecionada=null
 }
 else if(itemSelecionado !== null){
    itemSelecionado.classList.remove("selecionado")
    elemento.classList.add("selecionado")
    comidaSelecionada = elemento
    com = elemento.querySelector(".produto").innerText
    compreco = elemento.querySelector(".preco").innerText
   }
 else{
    elemento.classList.add("selecionado")
    comidaSelecionada = elemento
    com = elemento.querySelector(".produto").innerText
    compreco = elemento.querySelector(".preco").innerText
 }
 Contar();
}

function bebidaSelecao(elemento){

    const itemSelecionado = document.querySelector(".bebida .selecionado")
    if(itemSelecionado == elemento){
       itemSelecionado.classList.remove("selecionado")
       bebidaSelecionada = null
    }
    else if(itemSelecionado !== null){
       itemSelecionado.classList.remove("selecionado")
       elemento.classList.add("selecionado")
       bebidaSelecionada = elemento 
       beb = elemento.querySelector(".produto").innerText 
       bebpreco = elemento.querySelector(".preco").innerText      
   }
    else{
       elemento.classList.add("selecionado")
       bebidaSelecionada = elemento
       beb = elemento.querySelector(".produto").innerText
       bebpreco = elemento.querySelector(".preco").innerText
       
    }
    Contar();
   }
   function sobremesaSelecao(elemento){

      const itemSelecionado = document.querySelector(".sobremesa .selecionado")
      if(itemSelecionado == elemento){
         itemSelecionado.classList.remove("selecionado")
         sobremesaSelecionada =  null
      }
      else if(itemSelecionado !== null){
         itemSelecionado.classList.remove("selecionado")
         elemento.classList.add("selecionado")
         sobremesaSelecionada = elemento
         sob = elemento.querySelector(".produto").innerText
         sobpreco = elemento.querySelector(".preco").innerText
     }
      else{
         elemento.classList.add("selecionado")
         sobremesaSelecionada = elemento  
         sob = elemento.querySelector(".produto").innerHTML
         sobpreco = elemento.querySelector(".preco").innerText
      }
      Contar();
     }
  
     function Contar(){

        const inicial = document.querySelector(".botao-checkout")
        const finalizar = document.querySelector(".botao-fechar")
        if(comidaSelecionada!==null  && bebidaSelecionada!==null && sobremesaSelecionada!==null){
            inicial.classList.add("escondido");
            finalizar.classList.remove("escondido");
        }
        else{
            inicial.classList.remove("escondido");
            finalizar.classList.add("escondido");
    
        }
    }
    
    function fechar(){
      const final=document.querySelector(".container-confirmacao")
      final.classList.remove("escondido")

      let comida = document.querySelector(".pedido-comida")
      let bebida = document.querySelector(".pedido-bebida")
      let sobremesa =document.querySelector(".pedido-sobremesa")
      let comidaPreco = document.querySelector(".valor-comida")
      let bebidaPreco = document.querySelector(".valor-bebida")
      let sobremesaPreco = document.querySelector(".valor-sobremesa")
      let somatorio = document.querySelector(".total")
      
      comida.innerHTML = com
      bebida.innerHTML = beb
      sobremesa.innerHTML = sob
      comidaPreco.innerHTML = compreco
      bebidaPreco.innerHTML = bebpreco
      sobremesaPreco.innerHTML = sobpreco
      
   }