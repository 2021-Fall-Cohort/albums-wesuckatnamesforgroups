import {
  displayAlbumView
} from "./album.js";
import {
  displayAlbumsView
} from "./albums.js";
const genericContainer = document.querySelector(".container");

buildPage();
buildHeader();


function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

function buildPage() {
  const mainPage = document.createElement("div");
  mainPage.classList.add("mainPage");
  genericContainer.appendChild(mainPage);



  fetch("http://localhost:8080/Albums/")
    .then((res) => res.json())
    .then((albums) => {

      displayAlbumsView(mainPage, albums);
      mainPage.style.backgroundColor = "red";
    });

}



function buildHeader() {
  const headerEl = document.createElement("header");
  headerEl.classList.add("main-header");

  const headerH1El = document.createElement("hy1");
  headerH1El.classList.add("main-header");
  headerH1El.innerText = "Welcome to Electro Psychodelic Coffee House";
}
// function buildFooter(){
//     const footerEl = document.createElement("footer");
//     footerEl.classList.add("footer-text");
//     const footerTextEl = document.createElelement("p");
//     footerTextEl.classList.add("footer-text")
//     footerTextEl.innerText = "Copyright &copy  2021 WeSuckAtNamesForGroups";
// }

// Main element function with fetch/ for each loop for albums

export {
  clearChildren
};