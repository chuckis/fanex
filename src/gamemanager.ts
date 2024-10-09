import * as ex from "excalibur";

let score: number = 0;

export abstract class GameManager {
   
    static events = new ex.EventEmitter<GameManagerEvents>()
    static get score() : number {
        return score;
    }

    
    static set score(v : number) {
        if (v < 0) {
            v = 0;
        }
        score = v;
        GameManager.events.emit('scorechange', score);
    }   
    
}

export interface GameManagerEvents{
    scorechange: {score: number}
}
