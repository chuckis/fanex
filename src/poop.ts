import * as ex from "excalibur";
import { Resources } from "./resources";
import { GameManager } from "./gamemanager";

export class Poop extends ex.Actor {
    
    constructor(pos: ex.Vector) {
      super({
        name: 'poop',
        pos,
        width: 100,
        height: 100
      });
      this.pointer.useGraphicsBounds = true;
      this.on('pointerdown', () => {
        this.kill(); 
        GameManager.score += 1;
      });
    }
  
    onInitialize() {
      this.graphics.add(Resources.Poop.toSprite());
    }

    override onPostUpdate(_engine: ex.Engine, _delta: number): void {
        this.actions.moveTo(ex.vec(400, 300), 80);
    }
    
  }