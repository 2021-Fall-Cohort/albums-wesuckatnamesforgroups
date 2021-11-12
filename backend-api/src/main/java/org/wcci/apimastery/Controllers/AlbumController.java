package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repositories.AlbumRepository;
import org.wcci.apimastery.Repositories.SongRepository;

import java.util.Optional;

@RestController
@RequestMapping("/Albums")
public class AlbumController {

    private AlbumRepository albumRepo;
    private SongRepository  songRepo;

    public AlbumController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/")
    public Iterable<Album> retrieveAllAlbums() {
        return albumRepo.findAll();
    }

    @GetMapping("/{id}")
    public Album retrieveSingleAlbum(@PathVariable long id){
        return albumRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Album> addAlbum(@RequestBody Album album){
        albumRepo.save(album);
        return albumRepo.findAll();
    }

    @PutMapping("/")
    public Iterable<Album> editAlbum(@RequestBody Album albumToEdit){
        if (albumToEdit.getId() != null){
            albumRepo.save(albumToEdit);
        }return albumRepo.findAll();
    }


    @PatchMapping ("/{id}/addSong")
    public Iterable<Album> addSongToAlbum(@RequestBody Song newSong, @PathVariable Long id){
        Album currentAlbum = albumRepo.findById(id).get();
        newSong.addAlbum(currentAlbum);
        songRepo.save(newSong);
        albumRepo.save(currentAlbum);
        return albumRepo.findAll();
    }

//    @PatchMapping("/{id}")
//    public Iterable<Album> deleteSongFromAlbum(@PathVariable Long id, @RequestBody Song songToDelete){
//        Album currentAlbum = albumRepo.findById(id).get();
//        Song tempSong = songRepo.findById(songToDelete.getId()).get();
//        currentAlbum.removeSong(tempSong);
//        songRepo.deleteById(tempSong.getId());
//        albumRepo.save(currentAlbum);
//        return albumRepo.findAll();
//    }

//    @PatchMapping("/{id}")
//    public Iterable<Album> editSong(@PathVariable Long id, @RequestBody Song songToEdit, @RequestBody String newTitle){
//        Album currentAlbum = albumRepo.findById(id).get();
//        Song tempSong = songRepo.findById(songToEdit.getId()).get();
//        tempSong.changeTitle(newTitle);
//        songRepo.save(tempSong); /// check if this saves a duplicate.
//        albumRepo.save(currentAlbum);
//        return albumRepo.findAll();
//
//    }

    @PatchMapping("/{id}/addComment")
    public Iterable<Album> addCommentToAlbum(@RequestBody String newComment, @PathVariable Long id){
        Album currentAlbum = albumRepo.findById(id).get();
        currentAlbum.addComments(newComment);
        albumRepo.save(currentAlbum);
        return albumRepo.findAll();
    }


    @DeleteMapping("/{id}")
    public Iterable<Album> deleteAlbum(@PathVariable Long id){
        albumRepo.deleteById(id);
        return albumRepo.findAll();
    }

}
