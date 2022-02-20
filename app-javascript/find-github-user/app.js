import card from "./components/card.js";
import { customData } from "./helpers/custom-fetch.js";


const $idSearch = document.getElementById('user-search');
const $iconSearch = document.querySelector('.icon-search');

const handleSearch = async ( e , input ) => {
    const valueSearch = input.value;
    if( !valueSearch ){
        alert('Debes de introducir algun termino en la caja de busqueda.');
        return;
    }

    const user = await customData('./UsuariosGitHub.json', valueSearch);
    console.log({ user });
    card(user);
}

document.addEventListener('keyup', (e) => e.keyCode === 13  && handleSearch( e,  $idSearch ));
$iconSearch.addEventListener( 'click', (e) => handleSearch( e, $idSearch ) );