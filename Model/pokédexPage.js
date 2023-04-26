class PokédexPage{

    constructor(pokémonArray = []){
        this.pokémonArray = pokémonArray;
    };

    addPokémonPage(newPokémonPage){
        this.pokémonArray.push(...newPokémonPage);
    };

    removePokémonPage(){
        this.pokémonArray = [];
    };

};