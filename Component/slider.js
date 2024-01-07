function Slider(URL) {

  // Getting the data
  async function getData() {
    let res = await fetch(`http://localhost:3000/${URL}`);
    let yogaPics = await res.json();
    renderSlider(yogaPics); // function to show the data
  }
  getData();

  let sliderContainer = document.createElement("div");
  sliderContainer.classList.add("sliderContainer");

  // Render the data on to the DOM
  function renderSlider(yogaPics) {
    // console.log("from the function", yogaPics);
    sliderContainer.innerHTML = `
  <p>Slider Title</p>
  <div class='cardContainer'>
  
    ${yogaPics
      .map((card) => {
        console.log(card.imgSrc);
        return Card(card.imgSrc, card.title).outerHTML;
      })
      .join("")}

      </div>`;
  }

  return sliderContainer;
}

function Card(imgSrc, title) {
  let CardContainer = document.createElement("div");
  CardContainer.classList.add("card");
  CardContainer.innerHTML = `
        <div class='imgContainer'>
          <img src="${imgSrc}"/>
        </div>
        <p>${title}</p>
    `;
  return CardContainer;
}

export { Slider };
