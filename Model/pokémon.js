class Pokémon{

    constructor(name, stats = []){
        this.name = name;
        this.stats = stats;
    };

    addStats(name, baseValue){
        const newStats = new Stats(name, baseValue);
        this.stats.push(newStats);
    }

};

class Stats{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    };

};