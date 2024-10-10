import * as ex from "excalibur";
import { Resources } from "./resources";
import { GameManager } from "./gamemanager";
import { Explosion } from "./explosion";
import { game } from "./main";

export class Poop extends ex.Actor {

  constructor(pos: ex.Vector) {
    super({
      name: 'poop',
      pos,
      width: 100,
      height: 100
    });
    this.pointer.useGraphicsBounds = true;

  }

  onInitialize() {
    this.graphics.add(Resources.Poop.toSprite());
    this.on('pointerdown', (_e) => {
      this.die();
      GameManager.score += 1;
    });
  }

  override onPostUpdate(_engine: ex.Engine, _delta: number): void {
    this.actions.moveTo(ex.vec(400, 300), 80);
  }

  die() {
    if (!this.isKilled()) {
      this.vel = ex.vec(0, 0)
      game.add(
        new Explosion({
          pos: this.pos
        })
      )
      this.kill()
    }
  }

}