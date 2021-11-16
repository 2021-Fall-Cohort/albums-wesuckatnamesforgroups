import { clearChildren } from "./app.js";
import { displaySongView } from "./song.js";
import { displayAlbumsView} from "./albums.js";


function displayAlbumView(mainPage, albums, album) {
    // const bodyContainerEl = document.querySelector(".container");  /// first container inside of body tag.

    const headerEl = document.createElement("div");
    headerEl.innerText = "Album View";

    const mainEl = document.createElement("main");
    mainEl.classList.add("album-area");

    const mainH1El = document.createElement("h1");
    mainH1El.classList.add("album-name");
    mainH1El.innerText = album.title;   

    const mainh2El = document.createElement("h2");
    mainEl.classList.add("artist-name");
    mainh2El.innerText = "Artist Name";

    const songListEl = document.createElement("div");

    songListEl.innertext = "song list here";
    album.songs.forEach(song => {
        const songListTitle = document.createElement("h3");
        songListTitle.classList.add("songListTitle");
        songListTitle.innerText = song.title;
        mainEl.appendChild(songListTitle);
        songListTitle.addEventListener("click", ()=>{
        
            clearChildren(mainPage);
            displaySongView(mainPage, song, album, albums);
            console.log(mainPage);

        });
        
    });

    // const albumImageEl = document.createElement("img");
    // albumImageEl.src = album.image;

    const editAlbumEl = document.createElement("input");
    editAlbumEl.placeholder = "Edit Album Name";

    const editAlbumButton = document.createElement("button");
    editAlbumButton.innerText = "submit edit";

    const backToAlbums =document.createElement("button");
    backToAlbums.classList.add("back-button");
    backToAlbums.placeholder="Back to Albums";
    backToAlbums.addEventListener("click", ()=>{
        clearChildren(mainPage);
        displayAlbumsView(mainPage, albums, album);
    });


    // const songPlayerEl = document.createElement("iframe");
    // songPlayerEl.src = 'https://open.spotify.com/embed/track/1gMLR4lfjbZnHSFylNgn1K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-pictur';
    mainEl.appendChild(backToAlbums);
    // mainEl.appendChild(songPlayerEl);
    mainEl.appendChild(editAlbumButton);
    mainEl.appendChild(editAlbumEl);
    // mainEl.appendChild(albumImageEl);
    mainEl.appendChild(songListEl);
    mainEl.appendChild(mainh2El);
    mainEl.appendChild(mainH1El);
    mainPage.appendChild(mainEl);
    mainPage.appendChild(headerEl);
    

    /// for each for songs//

// Add Song Section
    const songSectionEl= document.createElement("section");
    songSectionEl.classList.add("add-song");

    const songDivEl =document.createElement("div");
    songDivEl.classList.add("song-form")
    
    const inputSongEl = document.createElement("input");
    inputSongEl.classList.add("song-title");
    inputSongEl.placeholder= "Song Title";

    const inputSongDurationEl =document.createElement("input");
    inputSongDurationEl.classList.add("song-duration");
    inputSongDurationEl.placeholder= "Length of Song";

    const inputSongURLEl =document.createElement("input");
    inputSongURLEl.classList.add("iFrameUrl");
    inputSongURLEl.placeholder= "input iFrame Url";

    const inputSongRating =document.createElement("input");
    inputSongRating.classList.add("song-rating");
    inputSongRating.placeholder= "Rate The Song";


    const inputSongCommentEl =document.createElement("input");
    inputSongCommentEl.classList.add("song-comment");
    inputSongCommentEl.placeholder= "Comments for Song";

    const addSongButtonEL =document.createElement("button");
    addSongButtonEL.classList.add("submit-song");
    addSongButtonEL.placeholder= "Add Song"

    songDivEl.appendChild(addSongButtonEL);
    songDivEl.appendChild(inputSongCommentEl);
    songDivEl.appendChild(inputSongURLEl);
    songDivEl.appendChild(inputSongRating);
    songDivEl.appendChild(inputSongDurationEl);
    songDivEl.appendChild(inputSongEl);
    songSectionEl.appendChild(songDivEl);
    mainPage.appendChild(songSectionEl);

    addSongButtonEL.addEventListener("click", () => {
        const newSongJson = {

            "title": inputSongEl.value,
            "duration": inputSongDurationEl.value,
            "iFrameUrl": inputSongURLEl.value,
            "comments": [
                inputSongCommentEl.value
            ],
            "ratings": inputSongRating.value
        }
        fetch(`http://localhost:8080/Albums/${album.id}/addsong`,{
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSongJson)
        })
        .then(res => res.json())
        .then(album => {
            clearChildren(mainPage);
            displayAlbumView(mainPage, song, albums, album);        
        })
        .catch(err => console.error(err));
    })

//Add Comment Section//
    const songCommentEl =document.createElement("section");
    songCommentEl.classList.add("comments");

    const inputAlbumCommentEl = document.createElement("input");
    inputSongCommentEl.classList.add("comment-style");
    inputSongCommentEl.placeholder ="comments";

    const addSongCommentButtonEl =document.createElement("button");
    addSongCommentButtonEl.classList.add("submit-comment");
    addSongCommentButtonEl.placeholder="Submit Comment";
    
    songCommentEl.appendChild(addSongCommentButtonEl);
    songCommentEl.appendChild(inputSongCommentEl);
    mainPage.appendChild(songCommentEl);

    
}

export { displayAlbumView }; 

