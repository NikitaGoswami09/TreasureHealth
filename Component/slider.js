function Slider(slider, tall) {
  let sliderContainer = document.createElement("div");
  sliderContainer.classList.add("sliderContainer");
  sliderContainer.innerHTML = `
    <p>Slider Title</p>
    <div class='cardContainer'>
    ${slider.cardArr
      .map((card) => {
        return Card(card.cardTitle, false).outerHTML;
      })
      .join("")}
      </div>
      `;
  return sliderContainer;
}

function Card(title, tall) {
  let CardContainer = document.createElement("div");
  CardContainer.classList.add("card");
  CardContainer.innerHTML = `
      <div>
        <div class='imgContainer' style={{height: ${
          tall ? "200px" : "150px"
        }, color: '#fff'}}>
        <img src=''/>
        </div>
        <p>${title}</p>
      </div>
    `;
  return CardContainer;
}

export { Slider };
