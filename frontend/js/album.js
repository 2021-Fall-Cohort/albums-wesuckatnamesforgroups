

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

    const songPlayerEl = document.createElement("iframe");
    songPlayerEl.src = 'https://open.spotify.com/embed/track/1gMLR4lfjbZnHSFylNgn1K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-pictur';

    mainEl.appendChild(songPlayerEl);
    mainEl.appendChild(albumImageEl);
    mainEl.appendChild(songListEl);
    mainEl.appendChild(mainh2El);
    mainEl.appendChild(mainH1El);
    bodyContainerEl.appendChild(mainEl);
    bodyContainerEl.appendChild(headerEl);

    /// for each for songs.


    
}

export { displayAlbumView }; 

