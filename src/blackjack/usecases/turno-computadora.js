import { valorCarta, pedirCarta, crearCartaHTML } from "./";


/**
 * Funcion que determina el juego de la computadora
 * @param {Number} puntosMinimos Puntos para igualar o ganar al jugador
 * @param {HTMLElement} puntosHTML Elemento para insertar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento para insertar las cartas
 * @param {Array <String>} deck Array para pedir cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {
    
    if (!puntosMinimos) throw new Error('Puntos minimos necesarios');
    if (!puntosHTML) throw new Error('Argumento HTML necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
