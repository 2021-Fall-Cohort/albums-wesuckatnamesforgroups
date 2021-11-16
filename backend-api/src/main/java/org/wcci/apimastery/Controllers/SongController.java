package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repositories.AlbumRepository;
import org.wcci.apimastery.Repositories.SongRepository;

@RestController
@RequestMapping("/songs")
public class SongController {
    private AlbumRepository albumRepo;
    private SongRepository songRepo;


    public SongController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    public AlbumRepository getAlbumRepo() {
        return albumRepo;
    }

    public SongRepository getSongRepo() {
        return songRepo;
    }

    @GetMapping("/")
    public Iterable<Song> retrieveAllSongs(){
        return songRepo.findAll();
    }





}


