import { ImageSource, Loader } from "excalibur";
import poop from "./images/poop.png";

export const Resources = {
  Poop: new ImageSource(poop)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
