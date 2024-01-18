function Banner() {
  let bannerData;
  async function getData() {
    let res = await fetch("http://localhost:3000/banner");
    let res2 = await res.json();
    bannerData = res2[0];
    console.log(bannerData.imgSrc);
    renderBanner(bannerData.imgSrc, bannerData.heading);
  }
  getData();
  let BannerContainer = document.createElement("div");
  BannerContainer.classList.add("bannerContainer");

  function renderBanner(imgSrc, heading) {
    BannerContainer.innerHTML = `
      <div class="bannerImgContainer">
        <img src="${imgSrc}" />
      </div>
      <div class="banner1Text">
        <h2 class="banner1Heading">${heading}</h2>
      </div>
      `;
  }
  return BannerContainer;
}
export { Banner };
