import * as ex from 'excalibur';
import { Poop } from "./poop";
import { loader } from "./resources";
import { Fan } from "./fan";
import { Cloud } from './cloud';
import { getRandomBorderCoordinate } from "./utils";
import { ScoreBoard } from './scoreboard';

class Game extends ex.Engine {

  poops: Poop[];
  private static instance: Game;

  static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  constructor() {
    super({ width: 800, height: 600 });
    this.poops = [];
  }

  onInitialize() {
    const board = new ScoreBoard();
    this.add(board);
    const fan = new Fan(ex.vec(400, 300));
    this.add(fan);
    this.start(loader);
    this.add(new Cloud(ex.vec(400, 100)));
    const timer = new ex.Timer({
      fcn: () => this.generatePoop(),
      repeats: true,
      interval: 1500,
    });
    this.add(timer);
    timer.start();
  }



  generatePoop = () => {
    const coords = getRandomBorderCoordinate(800, 400);
    const poop = new Poop(ex.vec(...coords));
    this.poops.push(poop);
    this.add(poop);
  }
}

export const game = Game.getInstance();


game.showDebug(true)
// @ts-ignore
window.showDebug = game.showDebug.bind(game)

// pause when window is not focused
window.addEventListener('blur', () => {
  game.stop()
})

window.addEventListener('focus', () => {
  game.start()
})
