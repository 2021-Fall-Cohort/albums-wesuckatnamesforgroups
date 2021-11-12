package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repositories.AlbumRepository;
import org.wcci.apimastery.Repositories.SongRepository;

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


    @PatchMapping ("/{id}/song")
    public Iterable<Album> addSongToAlbum(@RequestBody Song newSong, @PathVariable Long id){
        Album currentAlbum = albumRepo.findById(id).get();
        newSong.addAlbum(currentAlbum);
        songRepo.save(newSong);
        albumRepo.save(currentAlbum);
        return albumRepo.findAll();
    }


    @DeleteMapping("/{id}")
    public Iterable<Album> deleteAlbum(@PathVariable Long id){
        albumRepo.deleteById(id);
        return albumRepo.findAll();
    }

}
