
/**
 * Esta funcion recibe una carta y obtiene el valor de la carta
 * @param {String} carta es un carta en string
 * @returns {Number} Devuelve el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}