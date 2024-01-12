function DynamicPage({}) {
    // Getting the data
  async function getData() {
    let res = await fetch(`http://localhost:3000/${URL}`);
    let pageData = await res.json();
    renderPage(pageData); // function to show the data
  }
  getData();

    let pageContainer = document.createElement('div');
    pageContainer.classList.add = 'pageContainer';

    pageContainer.innerHTML = `
    <h1></h1>
    `
}