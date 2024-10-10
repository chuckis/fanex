import { ImageSource, Loader } from "excalibur";
import poop from "./images/poop.png";
import fan from "./images/fan.png";
import cloud from "./images/Cloud.png";
import explode from "./images/explosion.png";

export const Resources = {
  Poop: new ImageSource(poop),
  Fan: new ImageSource(fan),
  Cloud: new ImageSource(cloud),
  Explode: new ImageSource(explode)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
