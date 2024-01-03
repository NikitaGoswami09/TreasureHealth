function Navbar() {

  let NavbarContainer = document.createElement("nav");
  NavbarContainer.innerHTML = `<a href="#logo">Logo</a>
  <a href="#Home">Home</a>
  <a href="#Products&services">Products & Services</a>
  <a href="#Events">Events</a>
  <a href="#ContactUs">ContactUs</a>
  <a href="#Blogs">Blogs</a>
`
  NavbarContainer.style.border = "1px solid black";
  return NavbarContainer;
}

export { Navbar };
