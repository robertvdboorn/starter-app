import { registerUniformComponent } from "@uniformdev/canvas-react";
import Footer from "./footer";
import FooterLink from "./footer-link";

registerUniformComponent({
  type: "footer",
  component: Footer,
});

registerUniformComponent({
  type: "footerLink",
  component: FooterLink,
});

export default Footer;
