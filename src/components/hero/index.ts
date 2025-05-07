import { registerUniformComponent } from "@uniformdev/canvas-react";
import Hero from "./hero";

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
