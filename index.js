import { Footer } from "./Component/Footer/Footer.js";
let root = document.getElementById("root");
import { Banner } from "./Component/Banner.js";
import { Slider } from "./Component/slider.js";
import { Navbar } from "./Component/Navbar/navbar.js";

function App() {
  root.appendChild(Navbar());
  root.appendChild(Banner());
  root.appendChild(Slider("yoga"));
  root.appendChild(Slider("meditation"));
  root.appendChild(Footer());
}
App();
