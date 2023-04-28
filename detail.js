//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');

PokéService.getDetail(pokemonName).then(pokemonObject => {
    const myPokemon = createNewPokemon(pokemonObject);
    displayPokémon(myPokemon);
});

function displayPokémon(pokemon){
    const pokemonForm = document.getElementById('pokemon-form');
    pokemonForm.innerHTML = `<div class='img-box'><img class='pokemon-img' src='${pokemon.imageUrl}' alt='${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}'></div>
                            <div class='name-box'><h1>${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h1></div>
                            <div class='type-box'><strong>Types:</strong> ${pokemon.typesToDisplay()}</div>
                            <div class='abilities-box'><strong>Abilities:</strong> ${pokemon.abilitiesToDisplay()}</div>
                            <div class='stats-box'><strong>Stats:</strong> ${pokemon.statsToDisplay()}</div>
                            <div class='height-box'><strong>Height:</strong> ${pokemon.height}</div>
                            <div class='weight-box'><strong>Weight:</strong> ${pokemon.weight}</div>`;

};

function createNewPokemon(pokemonObject){

    const myPokemonImg = pokemonObject.sprites.front_default;

    const myPokemon = new Pokémon(pokemonObject.name, myPokemonImg, pokemonObject.height, pokemonObject.weight);

    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i];
        myPokemon.addStats(statObject.stat.name, statObject.base_stat);
    };
    console.log(myPokemon.stats);
    for (let i = 0; i < pokemonObject.abilities.length; i++) {
        const abilitiesObject = pokemonObject.abilities[i];
        myPokemon.addAbilities(abilitiesObject.ability.name);
    };
    console.log(myPokemon.abilities);
    for (let i = 0; i < pokemonObject.types.length; i++) {
        const typesObject = pokemonObject.types[i];
        myPokemon.addTypes(typesObject.type.name);
    };

    return myPokemon;

};