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
        Album album1 = new Album("mood variant", "Hiatus Kaiyote", "music Label", "Brainfeeder","5 stars", "no comment");
        albumRepo.save(album1);

        Song song1 = new Song("And We Go Gentle", "3.00", "", "5", album1,"Dope song");
        songRepo.save(song1);

        Song song2 = new Song("all the words we dont say", "04.00", "", "5", album1, "fav");
        songRepo.save(song2);

        Song song3 = new Song("sip into something soft", "03.50", "", "3", album1, "good song");
        songRepo.save(song3);

        Song song4 = new Song("");




    }

}
