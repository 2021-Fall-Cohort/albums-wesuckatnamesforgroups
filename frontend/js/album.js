

function displayAlbumView(album) {
    const bodyContainerEl = document.querySelector(".container");  /// first container inside of body tag.

    const headerEl = document.createElement("div");
    headerEl.innerText = "Album View";

    const mainEl = document.createElement("main");
    mainEl.classList.add("album-area");

    const mainH1El = document.createElement("h1");
    mainH1El.classList.add("album-name");
    mainH1El.innerText = album.title;   /// 

    const mainh2El = document.createElement("h2");
    mainEl.classList.add("artist-name");
    mainh2El.innerText = "Artist Name";

    const songListEl = document.createElement("div");

    songListEl.innertext = "song list here";
    album.songs.forEach(song => {
        
    });

    const albumImageEl = document.createElement("img");
    albumImageEl.src = album.image;

    const editAlbumEl = document.createElement("input");
    editAlbumEl.placeholder = "Edit Album Name";

    const editAlbumButton = document.createElement("button");
    editAlbumButton.innerText = "submit edit";

    // const songPlayerEl = document.createElement("iframe");
    // songPlayerEl.src = 'https://open.spotify.com/embed/track/1gMLR4lfjbZnHSFylNgn1K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-pictur';

    // mainEl.appendChild(songPlayerEl);
    mainEl.appendChild(editAlbumButton);
    mainEl.appendChild(editAlbumEl);
    mainEl.appendChild(albumImageEl);
    mainEl.appendChild(songListEl);
    mainEl.appendChild(mainh2El);
    mainEl.appendChild(mainH1El);
    bodyContainerEl.appendChild(mainEl);
    bodyContainerEl.appendChild(headerEl);

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
    inputSongURLEl.classList.add("song-rating");
    inputSongURLEl.placeholder= "Rate The Song";

    const inputSongCommentEl =document.createElement("input");
    inputSongCommentEl.classList.add("song-comment");
    inputSongCommentEl.placeholder= "Comments for Song";

    const addSongButtonEL =document.createElement("button");
    addSongButtonEL.classList.add("submit-song");
    addSongButtonEL.placeholder= "Add Song"

    songDivEl.appendChild(addSongButtonEL);
    songDivEl.appendChild(inputSongCommentEl);
    songDivEl.appendChild(inputSongURLEl);
    songDivEl.appendChild(inputSongDurationEl);
    songDivEl.appendChild(inputSongEl);
    songSectionEl.appendChild(songDivEl);
    bodyContainerEl.appendChild(songSectionEl);

//Add Comment Section//
    const songCommentEl =document.createElement("section");
    songCommentEl.classList.add("comments");

    const inputSongCommentEl =document.createElement("input");
    inputSongCommentEl.classList.add("comment-style");
    inputSongCommentEl.placeholder ="comments";

    const addSongCommentButtonEl =document.createElementNS("button");
    addSongCommentButtonEl.classList.add("submit-comment");
    addSongCommentButtonEl.placeholder="Submit Comment";
    
    songCommentEl.appendChild(addSongCommentButtonEl);
    songCommentEl.appendChild(inputSongCommentEl);
    bodyContainerEl.appendChild(songCommentEl);

    
}

export { displayAlbumView }; 

