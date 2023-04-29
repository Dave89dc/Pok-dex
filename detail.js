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
                            <div class='name-box'><h1>#${numberOfPokedex(pokemon.id)} ${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h1></div>
                            <div class='type-box'><strong>Types:</strong> ${pokemon.types.map(t =>`<a class='types-link' alt='Pokémon Types' href='./types.html?typesUrl=${t.url}'>${t.name}</a>`).join(', ')}</div>
                            <div class='abilities-box'><strong>Abilities:</strong> ${pokemon.abilitiesToDisplay()}</div>
                            <div class='stats-box'>
                                <strong>Stats:</strong>
                                <ul>${pokemon.stats.map(s =>`<li>${s.name}: ${s.baseValue}</li>`).join('')}</ul>
                            </div>
                            <div class='height-box'><strong>Height:</strong> ${pokemon.height}</div>
                            <div class='weight-box'><strong>Weight:</strong> ${pokemon.weight}</div>`;

};

function createNewPokemon(pokemonObject){

    const myPokemon = new Pokémon(pokemonObject.name, pokemonObject.sprites.front_default, pokemonObject.height, pokemonObject.weight, pokemonObject.id);

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
        myPokemon.addTypes(typesObject.type.name, typesObject.type.url);
    };

    return myPokemon;

};

function numberOfPokedex(pokemonId) {

    let numberOfPokemon;
    if(pokemonId < 10){
        numberOfPokemon = '000' + pokemonId;
    } else if(pokemonId >= 10 && pokemonId < 100) {
        numberOfPokemon = '00' + pokemonId;
    } else if(pokemonId >= 100 && pokemonId < 1000) {
        numberOfPokemon = '0' + pokemonId;
    } else if(pokemonId >= 1000) {
        numberOfPokemon = pokemonId;
    };
    return numberOfPokemon;
    
};