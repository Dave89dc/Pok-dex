class PokéService{

    static POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

    static PAGE_LIMIT = 11;

    static POKEMON_NUMBER = 1281;

    static PAGE_COUNT = Math.ceil(this.POKEMON_NUMBER / this.PAGE_LIMIT);

    // static getNextPokémon(page){
    //     if(page === undefined || page.next === null) {
    //         return fetch(this.poké_URL).then(resp => resp.json());
    //     } else {
    //         return fetch(page.next).then(resp => resp.json());
    //     };
    // };

    // static getPreviousPokémon(page){
    //     if(page === undefined || page.previous === null){
    //         return fetch(this.poké_URL).then(resp => resp.json());
    //     } else{
    //         return fetch(page.previous).then(resp => resp.json());
    //     };
    // };

    // static getDetail(name){
    //     const url = this.poké_URL + '/' + name;
    //     return fetch(url).then(resp => resp.json());
    // };

    static getPageAtIndex(index){
        const url = this.POKE_URL + '?limit=' + this.PAGE_LIMIT + '&offset=' + (this.PAGE_LIMIT * index);
        return fetch(url).then(resp => resp.json());
    };

    static getDetail(name){
        const url = this.POKE_URL + '/' + name;
        return fetch(url).then(resp => resp.json());
    };

    static getTypes(url){
        return fetch(url).then(resp => resp.json());
    };

};