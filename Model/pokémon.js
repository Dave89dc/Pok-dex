class Pokémon{

    constructor(name, imageUrl, height, weight, types = [], abilities = [], stats = []){
        this.name = name;
        this.types = types;
        this.imageUrl = imageUrl;
        this.abilities = abilities;
        this.stats = stats;
        this.height = height;
        this.weight = weight;
    };

    addStats(name, baseValue){
        const newStats = new Stats(name, baseValue);
        this.stats.push(newStats);
    };

    addAbilities(name){
        const newAbilities = new Abilities(name);
        this.abilities.push(newAbilities);
    };

    addTypes(name){
        const newType = new Types(name);
        this.types.push(newType);
    };

    typesToDisplay(){
        const typesArray = [];
        for (let i = 0; i < this.types.length; i++) {
            const type = this.types[i];
            typesArray.push(type.name);
        };
        return typesArray.join(', ');
    };
    

    abilitiesToDisplay(){
        const abilitiesArray = [];
        for (let i = 0; i < this.abilities.length; i++) {
            const ability = this.abilities[i];
            abilitiesArray.push(ability.name);
        };
        return abilitiesArray.join(', ');
    };

    statsToDisplay(){
        const statsArray = [];
        for (let i = 0; i < this.stats.length; i++) {
            const state = this.stats[i];
            statsArray.push(state.name + '= ' + state.baseValue);
        };
        return statsArray.join('/ ');
    }

};

class Stats{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    };

};

class Abilities{

    constructor(name){
        this.name = name;
    };

};

class Types{

    constructor(name){
        this.name = name;
    };

};