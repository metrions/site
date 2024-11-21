import React from 'react';
import Comment from "./Comment";

const CommentsArray = (commentsArray) => {
    return (
        <div>
            {commentsArray.map(comment => (
                <li key={comment.id}><Comment comment={comment}/></li>
            ))}
        </div>
    );
}

export default CommentsArray;