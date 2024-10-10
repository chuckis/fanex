import * as ex from "excalibur";
import { Resources } from "./resources";


export class Explosion extends ex.Actor {
    onInitialize() {
        const spritesheet = ex.SpriteSheet.fromImageSource({
            image: Resources.Explode,
            grid: {
                columns: 7,
                rows: 1,
                spriteWidth: 60,
                spriteHeight: 60,
            },
        })
        const anim = ex.Animation.fromSpriteSheet(
            spritesheet,
            [0, 1, 2, 3, 4, 5, 6],
            25,
            ex.AnimationStrategy.End
        )
        this.graphics.use(anim)
        anim.events.on("end", () => {
            this.kill()
        })
    }
}