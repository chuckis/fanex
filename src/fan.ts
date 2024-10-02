import * as ex from "excalibur";
import { Resources } from "./resources";

export class Fan extends ex.Actor {

    constructor(pos: ex.Vector) {
        super({
            name: 'fan',
            pos,
            width: 100,
            height: 100
        });
    }
  
    onInitialize() {
      this.graphics.add(Resources.Fan.toSprite());
    }
    override onPostUpdate(_engine: ex.Engine, _delta: number): void {
        this.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.Clockwise);
    }

  }