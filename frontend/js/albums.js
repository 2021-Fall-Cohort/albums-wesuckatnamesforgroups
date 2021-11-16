// import { displayAlbumView } from "./album";
// import { clearChildren } from "./app";

function displayAlbumsView(mainPage, albums) {

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("container");
    mainPage.appendChild(mainDiv);
    console.log("Start of displayAlbumsView")
    console.log(albums);
    
// Welcome Section
    const welcomeSectionEL = document.createElement("section"); //***changed from query select to create element ***
    welcomeSectionEL.classList.add("welcome-section");
    
    const welcomeH1 =document.createElement("h1");
    welcomeH1.innerText = "WELCOME MESSAGE HERE";

    const welcomeArtEl = document.createElement("img");
    welcomeArtEl.classList.add("welcome-art");

    welcomeSectionEL.appendChild(welcomeArtEl);
    welcomeSectionEL.appendChild(welcomeH1);
    mainDiv.appendChild(welcomeSectionEL);

    const allAlbumsH1=document.createElement("h1");
    allAlbumsH1.innerText = "All Albums Page";

    albums.forEach(album => {
        
        // Main Area
        const albumAreaEl = document.createElement("main");
        albumAreaEl.classList.add("album-area");
        
        const albumNameH2= document.createElement("h2");
        albumNameH2.classList.add("album-name");
        albumNameH2.innerText = album.title;
        albumNameH2.addEventListener("click", () => {
            clearChildren(mainPage);
            displayAlbumView(mainPage, albums, album);
        })

        const artistNameH2=document.createElement("h2");
        artistNameH2.classList.add("artist-name");
        artistNameH2.innerText = album.artist;


        const albumRatingH3=document.createElement("h3");
        albumRatingH3.classList.add("album-rating");
        albumRatingH3.innertext = album.rating;

        const albumArtImg =document.createElement("img");
        albumArtImg.classList.add("image-art");
        albumArtImg.innerText = album.image;
        
        const deleteAlbumButton= document.createElement("button");
        deleteAlbumButton.classList.add("delete-album");
        deleteAlbumButton.placeholder= "Delete Album";

        albumAreaEl.appendChild(deleteAlbumButton);
        albumAreaEl.appendChild(albumArtImg);
        albumAreaEl.appendChild(albumRatingH3);
        albumAreaEl.appendChild(artistNameH2);
        albumAreaEl.appendChild(albumNameH2);
        albumAreaEl.appendChild(allAlbumsH1);
        mainDiv.appendChild(albumAreaEl);

    });
    


// Add Album
    const addAlbumSection = document.createElement("section");
    addAlbumSection.classList.add("add-album-section")

    const addAlbumH1 =document.createElement("h1");
    
    const albumDivEl = document.createElement("div");
    albumDivEl.classList.add("album-form");

    const albumTitleEl = document.createElement("input");
    albumTitleEl.classList.add("album-title");
    albumTitleEl.placeholder = "album title";

    const albumArtistEl = document.createElement("input");
    albumArtistEl.classList.add("album-artist");
    albumArtistEl.placeholder = "artist";

    const albumArtEl = document.createElement("input");
    albumArtEl.classList.add("album-art");
    albumArtEl.placeholder = "Album Art URL";

    const recordLabelEl = document.createElement("input");
    recordLabelEl.classList.add("record-label");
    recordLabelEl.placeholder = "Record Label";

    const albumCommentEl = document.createElement("input");
    albumCommentEl.classList.add("album-comment");
    albumCommentEl.placeholder = "Album Comments";

    const albumRatingEl = document.createElement("input");
    albumRatingEl.classList.add("album-rating");
    albumRatingEl.placeholder = "Rate Album 1-5";

    const albumButtonEl = document.createElement("button");
    albumButtonEl.classList.add("sumbit-album");
    albumButtonEl.placeholder = "submit";

    
    albumDivEl.appendChild(albumButtonEl);
    albumDivEl.appendChild(albumRatingEl);
    albumDivEl.appendChild(albumCommentEl);
    albumDivEl.appendChild(recordLabelEl);
    albumDivEl.appendChild(albumArtEl);
    albumDivEl.appendChild(albumArtistEl);
    albumDivEl.appendChild(albumTitleEl);
    addAlbumSection.appendChild(albumDivEl);
    addAlbumSection.appendChild(addAlbumH1);
    mainDiv.appendChild(addAlbumSection); 
        
}

export {
    displayAlbumsView
} 