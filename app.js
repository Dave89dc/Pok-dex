// let actualPage;

const pokédex = new PokédexPage();

// loadNextPage();

// function loadNextPage(){
//     // if(actualPage !== undefined && actualPage.next === null){
//     //     return;
//     // };
//     PokéService.getNextPokémon(actualPage).then(pokémonPage => {
//         actualPage = pokémonPage;
//         pokédex.removePokémonPage();
//         pokédex.addPokémonPage(actualPage.results);
//         displayPokémon();
//     });
// };

// function loadPreviousPage(){
//     PokéService.getPreviousPokémon(actualPage).then(pokémonPage => {
//         actualPage = pokémonPage;
//         pokédex.removePokémonPage();
//         pokédex.addPokémonPage(actualPage.results);
//         displayPokémon();
//     });
// };

let actualPageIndex = -1;

let actualPage;

loadNextPage()

function loadNextPage(){
    actualPageIndex++;
    if (actualPageIndex >= PokéService.PAGE_COUNT){
        actualPageIndex = 0;
    }
    PokéService.getPageAtIndex(actualPageIndex).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
    })
}

function loadPreviousPage(){
    actualPageIndex--;
    if (actualPageIndex < 0) {
        actualPageIndex = PokéService.PAGE_COUNT - 1;
    }
    PokéService.getPageAtIndex(actualPageIndex).then(pokemonPage => {
        actualPage = pokemonPage;
        displayPokemon();
    })
}

// function displayPokemon(){
//     const pokémonBox = document.getElementById('pokémon-box');
//     pokémonBox.innerHTML = '';
//     const newPokédexPage = pokédex.pokémonArray;
//     for (let i = 0; i < newPokédexPage.length; i++) {
//         const pokémon = newPokédexPage[i];
//         pokémonBox.innerHTML += `<span><a class='pokémon-name' href='./detail.html?pokemon=${pokémon.name}'>${pokémon.name[0].toUpperCase()+pokémon.name.slice(1)}</a></span><br>`;
//     };
// };

function displayPokemon(){
    //searchParams o queryParams
    const html = actualPage.results.map(pokémon => `<div><a class='pokémon-name' href="./detail.html?pokemon=${pokémon.name}"><strong>${pokémon.name[0].toUpperCase()+pokémon.name.slice(1)}</strong></a></div>`).join('');
    document.getElementById('pokémon-box').innerHTML = html;


}