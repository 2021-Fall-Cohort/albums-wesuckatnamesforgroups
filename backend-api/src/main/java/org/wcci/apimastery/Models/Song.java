package org.wcci.apimastery.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Song {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String duration;
    @ElementCollection
    private Collection<String> comments;
    private String ratings;

    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song(String title, String duration,  String ratings, Album album, String...comments) {
        this.title = title;
        this.duration = duration;
        this.comments = Arrays.asList(comments);
        this.ratings = ratings;
        this.album = album;
    }

    public Song() {
    }

    public void addAlbum(Album album){
        this.album = album;

    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDuration() {
        return duration;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public String getRatings() {
        return ratings;
    }

    public Album getAlbum() {
        return album;
    }
}
