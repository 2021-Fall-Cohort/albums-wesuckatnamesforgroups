package org.wcci.apimastery.Models;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String artist;
    private String artistImage;
    private String image;
    private String label;

    @ElementCollection
    private Collection<String> comments;
    private String rating;

    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Song> songs;

    public Album(String title, String artist, String artistImage, String image, String label, String rating, String... comments) {
        this.title = title;
        this.artist = artist;
        this.artistImage = artistImage;
        this.image = image;
        this.label = label;
        this.comments = Arrays.asList(comments);
        this.rating = rating;

    }

    public Album(){
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getArtistImage() {
        return artistImage;
    }

    public String getImage() {
        return image;
    }

    public String getLabel() {
        return label;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public String getRating() {
        return rating;
    }

    public Collection<Song> getSongs() {
        return songs;
    }


    public void addSong(Song song) {
        this.songs.add(song);
    }

    public void removeSong(Song song){
        this.songs.remove(song);
    }

    public void addComments(String comment) {
        this.comments.add(comment);
    }

    public void changeTitle(String newTitle) {
        this.title = newTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(id, album.id) && Objects.equals(title, album.title) && Objects.equals(artist, album.artist) && Objects.equals(artistImage, album.artistImage) && Objects.equals(image, album.image) && Objects.equals(label, album.label) && Objects.equals(comments, album.comments) && Objects.equals(rating, album.rating) && Objects.equals(songs, album.songs);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, artist, artistImage, image, label, rating);
    }
}
