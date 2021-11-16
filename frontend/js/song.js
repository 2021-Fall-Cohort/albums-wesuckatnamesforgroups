import { displayAlbumView } from "./album.js";
import { clearChildren } from "./app.js";

function displaySongView(mainPage, song, album, albums) {
    console.log(song);
    const songContainer =document.createElement("container");
    songContainer.classList.add("song-details");


    // Art
    const albumArtSection =document.createElement("section");
    albumArtSection.classList.add("album-image");

    
    const songAlbumH1 =document.createElement("h1");
    // songAlbumH1.innerText = album.title;

    const albumArtDiv = document.createElement("div");
    albumArtDiv.classList.add("album-art");

    const songAlbumArt =document.createElement("img");
    songAlbumArt.classList.add("art-image-art");

    albumArtDiv.appendChild(songAlbumArt);
    albumArtSection.appendChild(albumArtDiv);
    albumArtSection.appendChild(songAlbumH1);
    songContainer.appendChild(albumArtSection);
    mainPage.appendChild(songContainer);
    // Main Info
    const songInfo = document.createElement("main");
    songInfo.classList.add("song-info");
    

    const songName =document.createElement("h1");
    songName.classList.add("song-name");
    songName.innerText = song.title;

    const songRating=document.createElement("h1");
    songRating.classList.add("song-rating");
    songRating.innerText = song.ratings;

    const editSong =document.createElement("input");
    editSong.classList.add("edit-song");
    editSong.placeholder= "Edit Song Name";


    const editSongButton =document.createElement("button");
    editSongButton.classList.add("edit-song-name");
    editSongButton.placeholder="submit";

    const songPlayerDiv = document.createElement("div");
    songPlayerDiv.classList.add("songplater")

    const backToAlbum =document.createElement("button");
    backToAlbum.classList.add("back-button");
    backToAlbum.placeholder="Back to Album";
    backToAlbum.addEventListener("click", ()=>{
        clearChildren(mainPage);
        displayAlbumView(mainPage, albums, album);
    });

    songInfo.appendChild(backToAlbum);
    songInfo.appendChild(songPlayerDiv);
    songInfo.appendChild(editSongButton);
    songInfo.appendChild(editSong);
    songInfo.appendChild(songRating);
    songInfo.appendChild(songName);
    songContainer.appendChild(songInfo);
    

    // Add Comment to Song
    const songCommentEl =document.createElement("section");
    songCommentEl.classList.add("song-comments");

    const songCommentH1=document.createElement("h1");

    const commentEl=document.createElement("input");
    commentEl.classList.add("song-comment-text");
    commentEl.placeholder= "Enter song comment";

    const songCommentButton =document.createElement("button");
    songCommentButton.classList.add("submit-comment");
    songCommentButton.placeholder= "Add Comment To Song"

    songCommentEl.appendChild(songCommentButton);
    songCommentEl.appendChild(commentEl);
    songCommentEl.appendChild(songCommentH1);
    songContainer.appendChild(songCommentEl);
}  

export {
    displaySongView
} 