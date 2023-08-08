
/*function playRound(seleccion_jugador, computerSelection) {

   function game(){

        console.log(("Se jugaran 5 rondas del juego"));
        
        if( seleccion_jugador == "papel" && computerSelection == "piedra"){
            console.log("Gano el jugador, el papel vence a la piedra");
        }
        else if( seleccion_jugador == "piedra" && computerSelection == "tijera"){
            console.log("Gana el jugador, la piedra vence a la tijera");
        }
        else if(seleccion_jugador == "tijera" && computerSelection == "papel"){
            console.log("Gana el jugador, la tijera vence al papel");
        }
        else{
            console.log("El jugador perdio");
        }
    }

    return game();
 
    
    // your code here!
  }




 
  const seleccion_jugador = "tijera";
  const computerSelection = seleccion_computadora();
*/ 

function seleccion_computadora(){
    let numero_aleatorio = Math.floor(Math.random() *3);
 

if(numero_aleatorio == 0 ){
    return "piedra";
}  
else if (numero_aleatorio == 1){
    return "tijera";
}
else if (numero_aleatorio == 2){
    return "papel";
}
}


console.log( seleccion_computadora() );


  
 // for( let i=1; i<6; i++){
    //console.log(playRound(seleccion_jugador, computerSelection))
//}
//getComputerChoice();
 