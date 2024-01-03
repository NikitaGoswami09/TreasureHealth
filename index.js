
import { Footer } from "./Component/Footer/Footer.js";
let root = document.getElementById("root");
import { Banner } from "./Component/Banner.js";
import { Slider } from "./Component/slider.js";
import{Navbar} from "./Component/Navbar/navbar.js"
function App() {
  let sliderData = {
    cardArr: [
      { cardTitle: "card title1" },
      { cardTitle: "card title2" },
      { cardTitle: "card title3" },
      { cardTitle: "card title3" },
    ]
  };
  root.appendChild(Navbar());
  root.appendChild(Banner());
  root.appendChild(Slider(sliderData, false));
  root.appendChild(Slider(sliderData, false));
  root.appendChild(Slider(sliderData, true));
  root.appendChild(Footer());
}
App()
;