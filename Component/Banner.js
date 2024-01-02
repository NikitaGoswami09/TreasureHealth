
function Banner() {
  let BannerContainer = document.createElement("div");
  BannerContainer.classList.add('bannerContainer')
  BannerContainer.innerHTML = `
    <h1>Banner</h1>
    `;
  return BannerContainer;
}
export{Banner}
