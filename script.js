/*
-La computadora escoge piedra papel o tijera aleatoriamente
-El jugador somos nosotros
-La piedra vence a la tijera, la tijera vence al papel, y el papel a la piedra

-IF nosotros escojimos piedra Y la maquina escojio tijera, ganamos nosotros,
ELSE gana la maquina

-If nosotros escojimos tijera Y la maquina escogio papel, ganamos nosotros,
ELSE gana la maquina

-IF nosotros escojemos papel, Y la maquina escogio piedra, ganamos nosotros,
ELSE gana la maquina

*/


let puntuacion_j = 0;
let puntuacion_m = 0;

alert("Este programa se ejecutara 5 veces, o sea tendra 5 rondas");
do{ 
    
for( let i=1; i<6; i++ ){
 
    //Funcion que genera piedra, papel o tijera aleatoiamente
function getComputerChoice(){
let numero_ale = Math.floor( Math.random() * 3);

if( numero_ale == 0){
    return "piedra";
}
else if( numero_ale == 1){
    return "papel";
}
else if( numero_ale == 2){
    return "tijera";
}
else{
    console.log("valor indefindio");
}
}


function playRound( playerSelection, COMPUTER_SELECTION ){
  

    console.log("El jugador escogio: "+playerSelection);
    console.log("Y la maquina escogio: "+COMPUTER_SELECTION);

function game(){

    if( playerSelection == "piedra" && COMPUTER_SELECTION == "tijera" ){
        console.log("¡Tu ganas! La piedra vence a la tijera");
        puntuacion_j++;
        console.log("Tu puntuacion es de: "+puntuacion_j)
    }
    else if( playerSelection == "papel" && COMPUTER_SELECTION == "piedra"){
        console.log("¡Tu ganas! El papel vence a la piedra");
        puntuacion_j++;
        console.log("Tu puntuacion es de: "+puntuacion_j)
    }
    else if( playerSelection == "tijera" && COMPUTER_SELECTION == "papel"){
        console.log("¡Tu ganas! La tijera vence a la piedra");
        puntuacion_j++;
        console.log("Tu puntuacion es de: "+puntuacion_j)
    }
    else if( playerSelection == COMPUTER_SELECTION){ 
        console.log("¡Es un empate!");
        console.log("Tu puntuacion es de: "+puntuacion_j);
        console.log("La puntuacion de la computadora es de: "+puntuacion_m);
    }
    else{
        console.log("La maquina gano");
        puntuacion_m++;
        console.log("La puntuacion de la computadora es de: "+puntuacion_m);
    }             
              
}

return game();

}


const COMPUTER_SELECTION = getComputerChoice();
let playerSelection = prompt("Piedra, Papel or Tijeras?");
    playerSelection = playerSelection.toLowerCase();

playRound( playerSelection, COMPUTER_SELECTION );
   
    

}

respuesta = prompt("¿Quieres volver a jugar?");
respuesta = respuesta.toLowerCase();
if( respuesta == "si"){ 
    puntuacion_j-=puntuacion_j;
    puntuacion_m-=puntuacion_m;
  }

}while ( respuesta == "si");



if( puntuacion_j > puntuacion_m){ 

    alert("Le ganaste a la maquina ");

  }
  else if (puntuacion_j == puntuacion_m) {
    alert("Empataste con la maquina");
  }  
  else{
     alert("La maquina te gano");
  }
  