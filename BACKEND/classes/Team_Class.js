class team {
    #teamname;
    #Wins;
    #losses;
    #hits;
    #homeruns;

    constructor(teamname, Wins, losses, hits, homeruns) {
        this.#teamname = teamname;
        this.#Wins = Wins;
        this.#losses = losses;
        this.#hits = hits;
        this.#homeruns = homeruns;
    }
}