function Navbar() {

  let NavbarContainer = document.createElement("nav");
  NavbarContainer.innerHTML = `
  
  <div id="logo">
  <a href="#logo">TreasureHealth</a>
  </div>
  <div>
  <a href="#Home">Home</a>
  <a href="#Products&services">Products & Services</a>
  <a href="#Events">Events</a>
  <a href="#ContactUs">ContactUs</a>
  <a href="#Blogs">Blogs</a>
  </div>
  <div id='user'>
  User
  </div>
`
  NavbarContainer.style.border = "1px solid black";
  return NavbarContainer;
}

export { Navbar };
