   package org.wcci.apimastery.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Song {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String duration;
    private String iFrameUrl;
    @ElementCollection
    private Collection<String> comments;
    private String ratings;

    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song(String title, String duration, String iFrameUrl, String ratings, Album album, String...comments) {
        this.title = title;
        this.duration = duration;
        this.iFrameUrl = iFrameUrl;
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

    public String getiFrameUrl() {
        return iFrameUrl;
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

    public void changeTitle(String newTitle) {
        this.title = newTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Song song = (Song) o;
        return Objects.equals(getId(), song.getId()) && Objects.equals(getTitle(), song.getTitle()) && Objects.equals(getDuration(), song.getDuration()) && Objects.equals(getiFrameUrl(), song.getiFrameUrl()) && Objects.equals(getRatings(), song.getRatings()) && Objects.equals(getAlbum(), song.getAlbum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getTitle(), getDuration(), getiFrameUrl(), getRatings(), getAlbum());
    }
}
