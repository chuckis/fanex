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
      this.on('pointerdown', () => {
        console.log('down')
      });
      this.on('pointerup', () => {
        console.log('up')
      });
    }
  
    onInitialize() {
      this.graphics.add(Resources.Poop.toSprite());
      this.on('pointerup', () => {
        alert('yo');
      });
    }

    override onPostUpdate(_engine: ex.Engine, _delta: number): void {
        this.actions.moveTo(ex.vec(400, 300), 200);
    }
    
  }