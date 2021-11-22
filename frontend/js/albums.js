import { displayAlbumView } from "./album.js";
import { clearChildren } from "./app.js";

function displayAlbumsView(mainPage, albums) {

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("interior-container");

    mainPage.appendChild(mainDiv);
    console.log("Start of displayAlbumsView");
    console.log(albums);
    
// Welcome Section
    const welcomeSectionEL = document.createElement("section"); 
    welcomeSectionEL.classList.add("welcome", "section-style");

    const textStyling=document.createElement("div");
    textStyling.classList.add("text-styling");
    
    const welcomeH1 =document.createElement("h1");
    welcomeH1.innerText = "WELCOME MESSAGE HERE";

    const welcomeDetails =document.createElement("small");
    welcomeDetails.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud";
   
    // const welcomeArtEl = document.createElement("img");
    // welcomeArtEl.classList.add("welcome-art"); 
    // welcomeArtEl.src = "./images/crate-digging.jpg"     
    
    mainDiv.appendChild(welcomeSectionEL);
    // welcomeSectionEL.appendChild(welcomeArtEl);
    welcomeSectionEL.appendChild(textStyling);
    textStyling.appendChild(welcomeH1);
    textStyling.appendChild(welcomeDetails);
    
// Addendum for "All Albums H1"
    const addendum =document.createElement("section");
    addendum.classList.add("addendum", "section-style");

    const allAlbumsH1=document.createElement("h1");
    allAlbumsH1.innerText = "Album Collection";
   
    addendum.appendChild(allAlbumsH1);
    mainDiv.appendChild(addendum);

 // Main Album Info
    const albumAreaEl = document.createElement("section");
    albumAreaEl.classList.add("album-area", "section-style");  
    

    albums.forEach(album => {
        
        const albumCard=document.createElement("article");
        albumCard.classList.add("album-card");

        const albumNameH2= document.createElement("h2");
        albumNameH2.classList.add("album-name");
        albumNameH2.innerText = album.title;
     

        const artistNameH2=document.createElement("h2");
        artistNameH2.classList.add("artist-name");
        artistNameH2.innerText = album.artist;

        const albumRatingH3=document.createElement("h3");
        albumRatingH3.classList.add("album-rating");
        albumRatingH3.innerText = "Album Rating: "+ album.rating;

        const albumArtImg =document.createElement("img");
        albumArtImg.classList.add("image-art");
        albumArtImg.src = album.image;
        albumArtImg.addEventListener("click", () => {
            clearChildren(mainPage);
            displayAlbumView(mainPage, albums, album);
        })

        
        const deleteAlbumButton= document.createElement("button");
        deleteAlbumButton.classList.add("delete-album");
        deleteAlbumButton.innerText="Delete Album";        
        deleteAlbumButton.addEventListener("click",  () => {
            fetch(`http://localhost:8080/Albums/${album.id}/deletealbum`, {
                method: `DELETE`
            })
            .then(res => res.json())
            .then(albums => {                                            //// line in question.
                clearChildren(mainPage);
                displayAlbumsView(mainPage, albums);
            })
            .catch(err => console.log(err));
        })
        
        
        albumCard.appendChild(albumArtImg);
        albumCard.appendChild(albumNameH2);        
        albumCard.appendChild(artistNameH2);
        albumCard.appendChild(albumRatingH3);        
        albumCard.appendChild(deleteAlbumButton);
        albumAreaEl.appendChild(albumCard);        
        mainDiv.appendChild(albumAreaEl);
        

    });
    
    

// Add Album
    const addAlbumSection = document.createElement("section");
    addAlbumSection.classList.add("add-album", "section-style")

    const addAlbumH1 =document.createElement("h1");
    addAlbumH1.innerText ="Add Album to Collection";

    const albumDivEl = document.createElement("div");
    albumDivEl.classList.add("album-form");

    const addAlbumImg =document.createElement("div");
    addAlbumImg.classList.add("add-album-img");

    const albumTitleEl = document.createElement("input");
    albumTitleEl.classList.add("album-title");
    albumTitleEl.placeholder = "album title";

    const albumArtistEl = document.createElement("input");
    albumArtistEl.classList.add("album-artist");
    albumArtistEl.placeholder = "artist";

    const albumArtEl = document.createElement("input");
    albumArtEl.classList.add("albumURL");
    albumArtEl.placeholder = "Album Art URL";

    const recordLabelEl = document.createElement("input");
    recordLabelEl.classList.add("record-label");
    recordLabelEl.placeholder = "Record Label";

    const artistImageEl = document.createElement("input");
    artistImageEl.classList.add("artist-image");
    artistImageEl.placeholder = "Artist Image Url"    

    const albumCommentEl = document.createElement("input");
    albumCommentEl.classList.add("album-comment");
    albumCommentEl.placeholder = "Album Comments";
    

    const albumRatingEl = document.createElement("input");
    albumRatingEl.classList.add("album-rating");
    albumRatingEl.placeholder = "Rate Album 1-5";

    const albumButtonEl = document.createElement("button");
    albumButtonEl.classList.add("sumbit-album");
    albumButtonEl.innerText = "Submit Comment"; 
    albumButtonEl.addEventListener("click",()=>{
        const newAlbumJson = {
            
    "title": albumTitleEl.value,
    "artist": albumArtistEl.value,
    "artistImage": artistImageEl.value,
    "image": albumArtEl.value,
    "label": recordLabelEl.value,
    "comments": [
      albumCommentEl.value
    ],
    "rating": albumRatingEl.value,
    "songs": []

    }
    fetch(`http://localhost:8080/Albums/addAlbum`,{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbumJson)
        })
        .then(res => res.json())
        .then(album => {
            clearChildren(mainPage);
            displayAlbumView(mainPage, album);        
        })
        .catch(err => console.error(err));
    })
     
    mainDiv.appendChild(addAlbumSection); 
    addAlbumSection.appendChild(addAlbumH1);
    addAlbumSection.appendChild(addAlbumImg);
    addAlbumSection.appendChild(albumDivEl);
    albumDivEl.appendChild(albumTitleEl);
    albumDivEl.appendChild(albumArtistEl);
    albumDivEl.appendChild(recordLabelEl);
    albumDivEl.appendChild(albumRatingEl);
    albumDivEl.appendChild(artistImageEl);        
    albumDivEl.appendChild(albumArtEl);
    albumDivEl.appendChild(albumCommentEl);
    albumDivEl.appendChild(albumButtonEl);
}

export {
    displayAlbumsView
} 