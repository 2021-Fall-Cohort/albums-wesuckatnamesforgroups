package org.wcci.apimastery.Models;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String image;
    private String label;

    @ElementCollection
    private Collection<String> comments;
    private String rating;

    @OneToMany(mappedBy = "album")      // to album/...
    private Collection<Song> songs;

    public Album(String title, String image, String label, String rating, String... comments) {
        this.title = title;
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

//    public void editSong(String song){
//        this.songs.
//
//    }
}
