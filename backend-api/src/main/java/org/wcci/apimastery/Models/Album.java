package org.wcci.apimastery.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
    private String comments;
    private String rating;

    @OneToMany(mappedBy = "album")      // to album/...
    private Collection<Song> songs;

    public Album(String title, String image, String label, String comments, String rating, Song... songs) {
        this.title = title;
        this.image = image;
        this.label = label;
        this.comments = comments;
        this.rating = rating;
        this.songs = Arrays.asList(songs);
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

    public String getComments() {
        return comments;
    }

    public String getRating() {
        return rating;
    }

    public Collection<Song> getSongs() {
        return songs;
    }
}
