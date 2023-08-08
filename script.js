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




const PLAYER_SELECTION = "piedra";
const COMPUTER_SELECTION = getComputerChoice();

function playRound( PLAYER_SELECTION, COMPUTER_SELECTION ){

    console.log("El jugador escogio: "+PLAYER_SELECTION);
    console.log("Y la maquina escogio: "+COMPUTER_SELECTION);
function game(){

    if( PLAYER_SELECTION == "piedra" && COMPUTER_SELECTION == "tijera" ){
        console.log("¡Tu ganas! La piedra vence a la tijera");
    }
    else if( PLAYER_SELECTION == "papel" && COMPUTER_SELECTION == "piedra"){
        console.log("¡Tu ganas! El papel vence a la piedra");
    }
    else if( PLAYER_SELECTION == "tijera" && COMPUTER_SELECTION == "papel"){
        console.log("¡Tu ganas! La tijera vence a la piedra");
    }
    else if( PLAYER_SELECTION == COMPUTER_SELECTION){ 
        console.log("¡Es un empate!");
    }
    else{
        console.log("La maquina gano");
    }

    
}

return game();

}

playRound( PLAYER_SELECTION, COMPUTER_SELECTION ) ;

