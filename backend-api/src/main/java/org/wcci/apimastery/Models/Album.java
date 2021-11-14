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
    private String image;
    private String label;

    @ElementCollection
    private Collection<String> comments;
    private String rating;

    @OneToMany(mappedBy = "album")      // to album/...
    private Collection<Song> songs;

    public Album(String title, String artist, String image, String label, String rating, String... comments) {
        this.title = title;
        this.artist = artist;
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

    @Override   /// changed
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(getId(), album.getId()) && Objects.equals(getTitle(), album.getTitle()) && Objects.equals(getArtist(), album.getArtist()) && Objects.equals(getImage(), album.getImage()) && Objects.equals(getLabel(), album.getLabel()) && Objects.equals(getRating(), album.getRating());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getTitle(), getArtist(), getImage(), getLabel(), getRating());
    }
}
