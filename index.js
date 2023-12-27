let root = document.getElementById("root");
// Import Navbar here
// syntax
import { Navbar } from "./Component/Navbar/navbar.js";
import { Banner } from "./Component/Banner.js";

// by default it is unsupported
// make this file a module.

// appending Navbar inside root element

function App() {
  let app = document.createElement("div");
  app.classList.add('app')
  app.appendChild(Navbar());
  app.appendChild(Banner());

  return app;
}

root.append(App());
