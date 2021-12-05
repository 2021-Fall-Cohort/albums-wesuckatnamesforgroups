import { clearChildren } from "./app.js";
import { displaySongView } from "./song.js";
import { displayAlbumsView } from "./albums.js";


function displayAlbumView(mainPage, albums, album) {
    const bodyContainerEl = document.createElement("container");
    bodyContainerEl.classList.add("interior-container");

    // Art Area
    const artistArtSection = document.createElement("section");
    artistArtSection.classList.add("artist-image-section")

    const albumArtistName = document.createElement("h2");
    albumArtistName.classList.add("artist-name");
    albumArtistName.innerText = album.artist;

    const artistImage = document.createElement("img");
    artistImage.classList.add("artist-image");
    artistImage.src = album.artistImage;
    
    

    bodyContainerEl.appendChild(artistArtSection);
    artistArtSection.appendChild(artistImage);
    artistArtSection.appendChild(artistImage);
    artistArtSection.appendChild(albumArtistName);

    // Main Album Area 
    const mainEl = document.createElement("section");
    mainEl.classList.add("album-main-info");

    const basicDiv = document.createElement("div");
    basicDiv.classList.add("main-elements");

    const albumTitleEl = document.createElement("h1");
    albumTitleEl.classList.add("album-name");
    albumTitleEl.innerText = album.title;

    const imageArt2 = document.createElement("img");
    imageArt2.classList.add("interior-album-art");
    imageArt2.src = album.image;
    

    const editAlbumEl = document.createElement("input");
    editAlbumEl.placeholder = "Edit Album Name";

    const editAlbumButton = document.createElement("button");
    editAlbumButton.classList.add("edit-album-name")
    editAlbumButton.innerText = "Submit Edit";
    editAlbumButton.addEventListener("click", () => {

        fetch(`http://localhost:8080/Albums/${album.id}/editname`, {
            method: 'PUT',

            body: editAlbumEl.value
        })
            .then(res => res.json())
            .then(album => {
                console.log(album);
                albums.forEach(currentAlbum => {
                    if (currentAlbum.id === album.id) {
                        console.log(album);
                        currentAlbum.title = album.title;
                    }
                });
                clearChildren(mainPage);
                displayAlbumView(mainPage, albums, album);


            })
        })



        const backToAlbums = document.createElement("button");
        backToAlbums.classList.add("back-button");
        backToAlbums.innerText = "Back to Albums";
        backToAlbums.addEventListener("click", () => {
            clearChildren(mainPage);
            displayAlbumsView(mainPage, albums, album);
        });

        const songListDiv = document.createElement("div");
        songListDiv.classList.add("song-list");

        const songListH1 = document.createElement("h1");
        songListH1.innerText = "Song List"


        mainPage.appendChild(bodyContainerEl);
        bodyContainerEl.appendChild(mainEl);
        mainEl.appendChild(basicDiv);
        basicDiv.appendChild(albumTitleEl);
        basicDiv.appendChild(editAlbumEl);        
        basicDiv.appendChild(editAlbumButton); 
        basicDiv.appendChild(imageArt2);       
        basicDiv.appendChild(backToAlbums);
        mainEl.appendChild(songListDiv);
        songListDiv.appendChild(songListH1);

        album.songs.forEach(song => {
            const songTitle = document.createElement("h3");
            songTitle.classList.add("songListTitle");

            const songDeleteButton = document.createElement("button");
            songDeleteButton.classList.add("delete-song-button");
            songDeleteButton.innerText = "Delete Song";
            songDeleteButton.addEventListener("click", () => {

                fetch(`http://localhost:8080/Albums/${album.id}/deletesong/${song.id}`, {
                    method: `DELETE`
                })
                    .then(res => res.json())
                    .then(album => {
                        clearChildren(mainPage);
                        displayAlbumView(mainPage, albums, album);
                        albums.forEach(currentAlbum => {
                            if (currentAlbum.id === album.id) {     /// updates the sond list for ALBUMS....
                                currentAlbum.songs = album.songs;
                            }
                        });
                    })

            })

            songTitle.innerText = song.title;
            songListDiv.appendChild(songTitle);
            songListDiv.appendChild(songDeleteButton);
            songTitle.addEventListener("click", () => {

                clearChildren(mainPage);
                displaySongView(mainPage, song, album, albums);
                console.log(mainPage);

            });
        });


// Add Song Section

        const songSectionEl = document.createElement("section");
        songSectionEl.classList.add("add-song");

        const songDivEl = document.createElement("div");
        songDivEl.classList.add("song-form")

        const addSongH1 = document.createElement("h1");
        addSongH1.innerText = "Add Song to Album";

        const inputSongEl = document.createElement("input");
        inputSongEl.classList.add("song-title");
        inputSongEl.placeholder = "Song Title";

        const inputSongDurationEl = document.createElement("input");
        inputSongDurationEl.classList.add("song-duration");
        inputSongDurationEl.placeholder = "Length of Song";

        const inputSongURLEl = document.createElement("input");
        inputSongURLEl.classList.add("iFrameUrl");
        inputSongURLEl.placeholder = "input iFrame Url";

        const inputSongRating = document.createElement("input");
        inputSongRating.classList.add("song-rating");
        inputSongRating.placeholder = "Rate The Song";


        const inputSongCommentEl = document.createElement("input");
        inputSongCommentEl.classList.add("song-comment");
        inputSongCommentEl.placeholder = "Comments for Song";

        const addSongButtonEL = document.createElement("button");
        addSongButtonEL.classList.add("submit-song");
        addSongButtonEL.innerText = "Add Song";

        bodyContainerEl.appendChild(songSectionEl);
        songSectionEl.appendChild(addSongH1);
        songSectionEl.appendChild(songDivEl);
        songDivEl.appendChild(inputSongEl);
        songDivEl.appendChild(inputSongDurationEl);
        songDivEl.appendChild(inputSongRating);
        songDivEl.appendChild(inputSongURLEl);
        songDivEl.appendChild(inputSongCommentEl);
        songDivEl.appendChild(addSongButtonEL);


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
            fetch(`http://localhost:8080/Albums/${album.id}/addsong`, {
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
        const albumCommentEl = document.createElement("section");
        albumCommentEl.classList.add("comments");

        const addAlbumCommentH1 = document.createElement("h1");
        addAlbumCommentH1.innerText = "Add Comment to Album";

        const inputAlbumCommentEl = document.createElement("input");
        inputAlbumCommentEl.classList.add("comment-style");
        inputAlbumCommentEl.placeholder = "comments";

        const addAlbumCommentButtonEl = document.createElement("button");
        addAlbumCommentButtonEl.classList.add("submit-comment");

        addAlbumCommentButtonEl.innerText = "Submit Comment";
        addAlbumCommentButtonEl.addEventListener("click", () => {

            fetch(`http://localhost:8080/Albums/${album.id}/addcomment`, {
                method: 'PATCH',

                body: inputAlbumCommentEl.value
            })
                .then(res => res.json())
                .then(album => {
                    // console.log(album);
                    albums.forEach(currentAlbum => {
                        if (currentAlbum.id === album.id) {
                            console.log(album);
                            currentAlbum.comments = album.comments;
                        }
                    });
                    clearChildren(mainPage);
                    displayAlbumView(mainPage, albums, album);
                   
                    
                })
                .catch(err => console.error(err));
        })

        
        bodyContainerEl.appendChild(albumCommentEl);
        albumCommentEl.appendChild(addAlbumCommentH1);
        albumCommentEl.appendChild(inputAlbumCommentEl);
        albumCommentEl.appendChild(addAlbumCommentButtonEl);

        function displayComments(album){
            console.log(album.comments);
            for(let i=0; i<=album.comments.length; i++){            
                const currentComment=document.createElement("small");
                currentComment.classList.add("current-comment");
                albumCommentEl.appendChild(currentComment);
            
                currentComment.innerText= album.comments[i];
            }
        }

         displayComments(album);


        

    }

export { displayAlbumView };