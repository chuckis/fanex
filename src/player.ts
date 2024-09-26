import { Actor, vec } from "excalibur";
import { Resources } from "./resources";

export class Fan extends Actor {
  constructor() {
    super({
      pos: vec(400, 300),
      width: 100,
      height: 100
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Fan.toSprite());
  }
}

export class Poop extends Actor {
  constructor(x: number, y: number) {
    super({
      pos: vec(x, y),
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
  
}
