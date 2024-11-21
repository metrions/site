package web.web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import web.web.dto.CommentDto;
import web.web.entity.CommentEntity;
import web.web.repository.CommentsReposirtory;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class LabController {
    private final CommentsReposirtory commentsReposirtory;
    private final ObjectMapper mapper = new ObjectMapper();

    @GetMapping("/getAllCommentsByUser")
    public List<CommentEntity> getAllCommentsByUser() {
        return commentsReposirtory.findAllByName();
    }

    @DeleteMapping("/deleteById")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Long id) {
        commentsReposirtory.deleteById(id);
    }

    @PostMapping("/saveComment")
    public CommentEntity saveComment(@RequestBody CommentDto comment) {
        var com = mapper.convertValue(comment, CommentEntity.class);
        return commentsReposirtory.save(com);
    }
}
