import * as ex from "excalibur";
import { Resources } from "./resources";

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
      });
    }
  
    onInitialize() {
      this.graphics.add(Resources.Poop.toSprite());
    }

    override onPostUpdate(_engine: ex.Engine, _delta: number): void {
        this.actions.moveTo(ex.vec(400, 300), 80);
    }
    
  }