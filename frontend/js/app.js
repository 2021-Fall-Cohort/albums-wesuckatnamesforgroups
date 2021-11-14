import { displayAlbumView } from "./album.js";
import { albumJson } from "./albumsJSON.js";
 
const genericContainer = document.querySelector(".container");

displayAlbumView(albumJson[0]);

