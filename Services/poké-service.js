class PokéService{

    static poké_URL = 'https://pokeapi.co/api/v2/pokemon';

    static getNextPokémon(page){
        if(page === undefined) {
            return fetch(this.poké_URL).then(resp => resp.json());
        } else {
            return fetch(page.next).then(resp => resp.json());
        };
    };

    static getPreviousPokémon(page){
        if(page === undefined || page.previous === null){
            return fetch(this.poké_URL).then(resp => resp.json());
        } else{
            return fetch(page.previous).then(resp => resp.json());
        };
    };

};