package web.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import web.web.entity.CommentEntity;

import java.util.List;

@Repository
public interface CommentsReposirtory extends JpaRepository<CommentEntity, Long> {

    @Query("select com from CommentEntity com order by com.id")
    List<CommentEntity> findAllByName();


}
