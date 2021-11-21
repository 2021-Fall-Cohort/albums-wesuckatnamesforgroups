import { displayAlbumView } from "./album.js";
import { clearChildren } from "./app.js";

function displaySongView(mainPage, song, album, albums) {
    console.log(song);
    const songContainer =document.createElement("container");
    songContainer.classList.add("interior-container");
    


// Art
    const albumArtSection =document.createElement("section");
    albumArtSection.classList.add("album-image");

    
    const songAlbumH1 =document.createElement("h1");
    songAlbumH1.innerText = album.title;

    const albumArtDiv = document.createElement("div");
    albumArtDiv.classList.add("album-art");

    const songAlbumArt =document.createElement("img");
    songAlbumArt.classList.add("art-image-art");  
      
    mainPage.appendChild(songContainer);
    songContainer.appendChild(albumArtSection);
    albumArtSection.appendChild(songAlbumH1);
    albumArtSection.appendChild(albumArtDiv);
    albumArtDiv.appendChild(songAlbumArt);

// Main Info
    const songInfo = document.createElement("main");
    songInfo.classList.add("song-info");
    

    const songName =document.createElement("h1");
    songName.classList.add("song-name");
    songName.innerText = song.title;

    const songRating=document.createElement("h1");
    songRating.classList.add("song-rating");
    songRating.innerText = "Rating: " +song.ratings;

    const editSong =document.createElement("input");
    editSong.classList.add("edit-song");
    editSong.placeholder= "Edit Song Name";


    const editSongButton =document.createElement("button");
    editSongButton.classList.add("edit-song-name");
    editSongButton.innerText="submit";

    const songPlayerDiv = document.createElement("div");
    songPlayerDiv.classList.add("songplater")

    const backToAlbum =document.createElement("button");
    backToAlbum.classList.add("back-button");
    backToAlbum.innerText="Back to Album";
    backToAlbum.addEventListener("click", ()=>{
        clearChildren(mainPage);
        displayAlbumView(mainPage, albums, album);
    });
             
    songContainer.appendChild(songInfo);
    songInfo.appendChild(songName);
    songInfo.appendChild(editSong);
    songInfo.appendChild(editSongButton);
    songInfo.appendChild(songRating);
    songInfo.appendChild(songPlayerDiv);
    songInfo.appendChild(backToAlbum);

    // *******Moved song player from Album to Song Page******
    // const songPlayerEl = document.createElement("iframe");
    // songPlayerEl.src = 'https://open.spotify.com/embed/track/1gMLR4lfjbZnHSFylNgn1K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-pictur';
  
    // mainEl.appendChild(songPlayerEl);   
    // mainEl.appendChild(albumImageEl);  


// Add Comment to Song
    const songCommentEl =document.createElement("section");
    songCommentEl.classList.add("comments");

    const songCommentH1=document.createElement("h1");
    songCommentH1.innerText= "Add Comment to Song";

    const commentEl=document.createElement("input");
    commentEl.classList.add("song-comment-text");
    commentEl.placeholder= "Enter song comment";

    const songCommentButton =document.createElement("button");
    songCommentButton.classList.add("submit-comment");
    songCommentButton.innerText= "Add Comment To Song";   
        
    songContainer.appendChild(songCommentEl);
    songCommentEl.appendChild(songCommentH1);
    songCommentEl.appendChild(commentEl);
    songCommentEl.appendChild(songCommentButton);
}  

export {
    displaySongView
} 