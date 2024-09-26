import * as ex from 'excalibur';
import { Fan, Poop } from "./player";
import { loader } from "./resources";
import { Cloud } from './cloud';

class Game extends ex.Engine {
  
  private poops: Poop[];
  // private fan: Fan;

    constructor() {
      super({width: 800, height: 600});
      this.poops = [];
    }
    
    initialize() {
      const fan = new Fan();
      this.add(fan);
      this.start(loader);
      this.add(new Cloud(ex.vec(400, 100)));
    }
    spawnPoop = (
      x: number,
      y: number
    ) => {
      const poop = new Poop(300, 300);
      this.poops.push(poop)
      this.add(poop);
    }
  }
  
  export const game = new Game();
  game.initialize();
  game.spawnPoop(200, 300);
  