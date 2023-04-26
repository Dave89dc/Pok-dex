let actualPage;

// PokéService.getNextPokémon(actualPage).then(pokémon => {
//     actualPage = pokémon;
//     console.log(actualPage);
// });

loadNextPage();

function loadNextPage(){
    PokéService.getNextPokémon(actualPage).then(pokémonPage => {
        actualPage = pokémonPage;
        console.log(actualPage);
    });
};

function loadPreviousPage(){
    PokéService.getPreviousPokémon(actualPage).then(pokémonPage => {
        actualPage = pokémonPage;
        console.log(actualPage);
    });
};