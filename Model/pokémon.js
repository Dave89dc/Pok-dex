class Pokémon{

    constructor(name, imageUrl, height, weight, id, types = [], abilities = [], stats = []){
        this.name = name;
        this.types = types;
        this.imageUrl = imageUrl;
        this.abilities = abilities;
        this.stats = stats;
        this.height = height;
        this.weight = weight;
        if(id !== undefined){
            this.id = id;
        };
    };

    addStats(name, baseValue){
        const newStats = new Stats(name, baseValue);
        this.stats.push(newStats);
    };

    addAbilities(name){
        const newAbilities = new Abilities(name);
        this.abilities.push(newAbilities);
    };

    addTypes(name, url){
        const newType = new Types(name, url);
        this.types.push(newType);
    };

    abilitiesToDisplay(){
        const abilitiesArray = [];
        for (let i = 0; i < this.abilities.length; i++) {
            const ability = this.abilities[i];
            abilitiesArray.push(ability.name);
        };
        return abilitiesArray.join(', ');
    };

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

    constructor(name, url){
        this.name = name;
        this.url = url;
    };

};