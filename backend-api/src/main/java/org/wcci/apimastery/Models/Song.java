package org.wcci.apimastery.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Song {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String duration;
    private String comments;
    private String ratings;

    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song(String title, String duration, String comments, String ratings, Album album) {
        this.title = title;
        this.duration = duration;
        this.comments = comments;
        this.ratings = ratings;
        this.album = album;
    }

    public Song() {
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

    public String getComments() {
        return comments;
    }

    public String getRatings() {
        return ratings;
    }

    public Album getAlbum() {
        return album;
    }
}
