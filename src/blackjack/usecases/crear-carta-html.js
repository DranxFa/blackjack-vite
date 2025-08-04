
/**
 * 
 * @param {String} carta Recibe una carta como string
 * @returns {ElementIMGHTML}Retorna un elementoIMGHTML
 */
// <img class="carta" src="assets/cartas/2C.png">
export const crearCartaHTML = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}