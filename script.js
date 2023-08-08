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
function Rondas( jugador_seleccion, seleccion_comp_ale ) {
    // your code here!
    console.log("El juego tendra 5 rondas");
function juego(){

    for( let i=1; i<6; i++){
        console.log(  "La ronda " + i + " el ganador fue:"  );
        seleccion_compu();
    }

}

juego();


}


let seleccion_comp_ale; 
const jugador_seleccion = "tijera";
Rondas( jugador_seleccion, seleccion_comp_ale);




//Funcion que regresa piedra, papel o tijera aleatoriamente
function seleccion_compu(){

let num_aleatorio = Math.floor( Math.random() *3);

switch (num_aleatorio){

case 0:
    seleccion_comp_ale = "tjera";
    break;

    case 1:
        seleccion_comp_ale = "piedra";
        break;

        case 2:
            seleccion_comp_ale = "papel";
            break;

}
console.log(seleccion_comp_ale);
}

