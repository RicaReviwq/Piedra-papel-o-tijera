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

console.log( getComputerChoice() );

