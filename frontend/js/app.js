import {
  displayAlbumView
} from "./album.js";
import {
  displayAlbumsView
} from "./albums.js";
const genericContainer = document.querySelector(".container");


buildHeader();
buildPage();
buildFooter();


function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}


function buildHeader() {
  const headerEl = document.createElement("header");
  headerEl.classList.add("main-header");

  const logoText = document.createElement("h1");
  logoText.classList.add("logo");
  logoText.innerText = "Logo Text";

  headerEl.appendChild(logoText);
  genericContainer.appendChild(headerEl);
}

function buildPage() {
  const mainPage = document.createElement("main");
  mainPage.classList.add("mainPage");
  genericContainer.appendChild(mainPage);



  fetch("http://localhost:8080/Albums/")
    .then((res) => res.json())
    .then((albums) => {

      displayAlbumsView(mainPage, albums);
      mainPage.style.backgroundColor = "red";
    });

}

function buildFooter(){
    const footerEl = document.createElement("footer");
    footerEl.classList.add("footer-text");
    const footerTextEl = document.createElement("small");
    footerTextEl.classList.add("footer-text")
    footerTextEl.innerHTML = "Copyright &copy  2021 WeSuckAtNamesForGroups";

    footerEl.appendChild(footerTextEl);
    genericContainer.appendChild(footerEl);
}

// Main element function with fetch/ for each loop for albums

export {
  clearChildren
};