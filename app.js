let actualPage;

const pokédex = new PokédexPage();

loadNextPage();

function loadNextPage(){
    // if(actualPage !== undefined && actualPage.next === null){
    //     return;
    // };
    PokéService.getNextPokémon(actualPage).then(pokémonPage => {
        actualPage = pokémonPage;
        pokédex.removePokémonPage();
        pokédex.addPokémonPage(actualPage.results);
        console.log(pokédex)
        displayPokémon();
    });
};

function loadPreviousPage(){
    PokéService.getPreviousPokémon(actualPage).then(pokémonPage => {
        actualPage = pokémonPage;
        pokédex.removePokémonPage();
        pokédex.addPokémonPage(actualPage.results);
        displayPokémon();
    });
};

function displayPokémon(){
    const pokémonBox = document.getElementById('pokémon-box');
    pokémonBox.innerHTML = '';
    const newPokédexPage = pokédex.pokémonArray;
    for (let i = 0; i < newPokédexPage.length; i++) {
        const pokémon = newPokédexPage[i];
        pokémonBox.innerHTML += `<span><a class='pokémon-name' href='${pokémon.url}'>${pokémon.name[0].toUpperCase()+pokémon.name.slice(1)}</a></span><br>`;
    };
};