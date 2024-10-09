import * as ex from 'excalibur';
import { GameManager } from './gamemanager';

export class ScoreBoard extends ex.Actor {
    private scoreboardLabel!: ex.Label;
    constructor() {
        super();
    }

    onInitialize() {
        this.scoreboardLabel = new ex.Label({
            text: 'Score 0',
            pos: ex.vec(50, 20),
            font: new ex.Font({
                family: 'impact',
                size: 24,
                unit: ex.FontUnit.Px
            })
        });
        this.addChild(this.scoreboardLabel);

    }

    onPreUpdate(_engine: ex.Engine<any>, _delta: number): void {
        this.scoreboardLabel.text = `Score: ${GameManager.score}`
    }

}