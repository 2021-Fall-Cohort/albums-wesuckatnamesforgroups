package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Models.Song;
import org.wcci.apimastery.Repositories.AlbumRepository;
import org.wcci.apimastery.Repositories.SongRepository;

@Component
public class Populator implements CommandLineRunner {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public Populator(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Album album1 = new Album("this album", "Url...", "music Label", "no comments", "5 stars");
        albumRepo.save(album1);
        Song song1 = new Song("And We Go Gentle", "3.00", "Dope Song", "5", album1);
        songRepo.save(song1);
    }

}
