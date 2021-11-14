package org.wcci.apimastery.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.Models.Album;

import java.util.Optional;

public interface AlbumRepository extends CrudRepository<Album, Long> {
}
