package web.web.dto;

import lombok.Data;

@Data
public class CommentDto {
    private String message;
    private String name;
    private String urlPhoto;
}
