
/**
 * Esta función permite tomar una carta
 * @param {Array <String>} deck es un arreglo de string
 * @returns {String} Devuelve la carta a tomar
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}