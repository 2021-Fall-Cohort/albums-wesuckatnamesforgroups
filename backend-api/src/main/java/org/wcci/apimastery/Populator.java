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
            Album album1 = new Album("Mood Variant", "Hiatus Kaiyote", "https://hipersonica.com/wp-content/uploads/2021/03/Hiatus-Kaiyote.jpg", "https://www.normanrecords.com/artwork/large/226/186226-hiatus-kaiyote-mood-valiant.jpg","Brainfeeder","5 stars", "The shiiiit");
            Album album2 = new Album("Con Todo El Mundo", "Kruangbin", "https://buzzbands.la/wp-content/gallery/khruangbin-wiltern-sw/Khruangbin-22.jpg","https://www.fiveriserecords.co.uk/wp-content/uploads/2018/01/a4178091556_10.jpg","Dead Oceans","5 stars", "You're dumb if you don't like this");
            Album album3 = new Album("The Rigel Axiom", "Dynatron", "https://www.metal-archives.com/images/2/0/8/4/20843_artist.jpg?2730", "https://newnoisemagazine.com/wp-content/uploads/2016/11/Dynatron-The-Rigel-Axiom-EP.jpg", "Blood Music","5 stars", "Get your mind right");
            Album album4 = new Album("Escape Velocity", "Dynatron", "https://www.metal-archives.com/images/2/0/8/4/20843_artist.jpg?2730rigel ", "https://i.scdn.co/image/ab67616d0000b2730aee69739dc851daff9e83d3", "Blood Music","5 stars", "Otherwordly");
            Album album5 = new Album("Choose Your Weapon", "Hiatus Kaiyote", "https://hipersonica.com/wp-content/uploads/2021/03/Hiatus-Kaiyote.jpg", "https://amusicblogyea.com/wp-content/uploads/2015/06/Hiatus-Kaiyote.jpg","Brainfeeder","5 stars", "Dopeness");
            Album album6 = new Album("Tawk Tamahawk", "Hiatus Kaiyote", "https://hipersonica.com/wp-content/uploads/2021/03/Hiatus-Kaiyote.jpg", "https://aentcdn.azureedge.net/graphics/items/sdimages/a/500/2/0/5/3/2343502.jpg","Brainfeeder","5 stars", "SIIIICK");
            Album album7 = new Album("Mordechai", "Kruangbin", "https://buzzbands.la/wp-content/gallery/khruangbin-wiltern-sw/Khruangbin-22.jpg","https://img.tmstor.es/tmmusic/64955-e8546e46b654b1f9c78c5c30030f40a5.jpg","Dead Oceans","5 stars", "You're dumb if you don't like this");
            Album album8 = new Album("The Universe Smiles Upon You", "Kruangbin", "https://buzzbands.la/wp-content/gallery/khruangbin-wiltern-sw/Khruangbin-22.jpg","https://static.stereogum.com/uploads/2015/11/a1774367281_10.jpg","Dead Oceans","5 stars", "You're dumb if you don't like this");
            albumRepo.save(album1);
            albumRepo.save(album2);
            albumRepo.save(album3);
            albumRepo.save(album4);
            albumRepo.save(album5);
            albumRepo.save(album6);
            albumRepo.save(album7);
            albumRepo.save(album8);

            Song song1 = new Song("Flight of the Tiger Lilly ", "0.35", "", "5", album1,"Dope song");
            Song song2 = new Song("Sip into Something Soft", "01.43", "", "3", album1, "good song");
            Song song3 = new Song("Chvary is Not Dead", "3.27", "", "5", album1,"Dope song");
            Song song4 = new Song("And We Go Gentle", "3.23", "", "5", album1,"Dope song");
            Song song5 = new Song("Get Sun", "5.38", "", "5", album1,"BANGER");
            Song song6 = new Song("All The Words We Don't Say", "05.06", "", "5", album1, "Insaaaane");
            Song song7 = new Song("Hush Rattle", "0.41", "", "5", album1,"Dope song");
            Song song8 = new Song("Rose Water", "3.00", "", "5", album1,"Dope song");
            Song song9 = new Song("Red Room", "3.52", "", "5", album1,"Sensual");
            Song song10 = new Song("Sparkle Tape Break Up", "5.15", "", "5", album1,"Dope song");
            Song song11 = new Song("Stone or Lavender", "5.30", "", "5", album1,"Dope song");
            Song song12  = new Song("Blood and Marrow", "3.30", "", "5", album1,"Dope song");

            songRepo.save(song1);
            songRepo.save(song2);
            songRepo.save(song3);
            songRepo.save(song4);
            songRepo.save(song5);
            songRepo.save(song6);
            songRepo.save(song7);
            songRepo.save(song8);
            songRepo.save(song9);
            songRepo.save(song10);
            songRepo.save(song11);
            songRepo.save(song12);

            Song ctem1 = new Song("Como Me Quieres", "3.45", "", "5", album2,"Dope song");
            Song ctem2 = new Song("Lady and Man", "418", "", "5", album2,"I coulda been a doctor");
            Song ctem3 = new Song("Maria Tambien", "3.10", "", "5", album2,"Dope song");
            Song ctem4 = new Song("August 10", "4.25", "", "5", album2,"Dope song");
            Song ctem5 = new Song("Como Te Quiero", "4.02", "", "5", album2,"Dope song");
            Song ctem6 = new Song("Shades of Man", "3.47", "", "5", album2,"Dope song");
            Song ctem7 = new Song("Evan Finds the Third Room", "4.00", "", "5", album2,"Press 3");
            Song ctem8 = new Song("A Hymn", "3.10", "", "5", album2,"Dope song");
            Song ctem9 = new Song("Rules", "4.29", "", "5", album2,"Dope song");
            Song ctem10 = new Song("Friday Morning", "3.00", "", "5", album2,"Dope song");

            songRepo.save(ctem1);
            songRepo.save(ctem2);
            songRepo.save(ctem3);
            songRepo.save(ctem4);
            songRepo.save(ctem5);
            songRepo.save(ctem6);
            songRepo.save(ctem7);
            songRepo.save(ctem8);
            songRepo.save(ctem9);
            songRepo.save(ctem10);

            Song axiom1 = new Song("The Tristar", "4.25", "", "5", album3,"Electric Vibes");
            Song axiom2 = new Song("Contact", "5.08", "", "5", album3,"Electric Vibes");
            Song axiom3 = new Song("Stones", "4.31", "", "5", album3,"Electric Vibes");
            Song axiom4 = new Song("Storms", "6.14", "", "5", album3,"Electric Vibes");
            Song axiom5 = new Song("The Unknow", "5.00", "", "5", album3,"Electric Vibes");
            songRepo.save(axiom1);
            songRepo.save(axiom2);
            songRepo.save(axiom3);
            songRepo.save(axiom4);
            songRepo.save(axiom5);

            Song velocity1 = new Song("Space Operations", "4.35", "", "5", album4,"Electric Vibes");
            Song velocity2 = new Song("Fireburner", "3.57", "", "5", album4,"Electric Vibes");
            Song velocity3 = new Song("Propulsion Overdrive", "5.15", "", "5", album4,"Electric Vibes");
            Song velocity4 = new Song("Aurora Nights", "8.24", "", "5", album4,"Electric Vibes");
            Song velocity5 = new Song("Vox Magnetismi", "3.45", "", "5", album4,"Electric Vibes");
            Song velocity6 = new Song("The Pulsating Nebula", "6.19", "", "5", album4,"Electric Vibes");
            Song velocity7 = new Song("Andromeda Bleeding", "6.04", "", "5", album4,"Electric Vibes");
            Song velocity8 = new Song("Pulse Power", "6.03", "", "5", album4,"Electric Vibes");
            Song velocity9 = new Song("Wormhole", "4.46", "", "5", album4,"Electric Vibes");

            songRepo.save(velocity1);
            songRepo.save(velocity2);
            songRepo.save(velocity3);
            songRepo.save(velocity4);
            songRepo.save(velocity5);
            songRepo.save(velocity6);
            songRepo.save(velocity7);
            songRepo.save(velocity8);
            songRepo.save(velocity9);



        }

}
