import React, { useState } from 'react';
import './post.css';

function Post({ post }) {

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(['댓글1', '댓글2', '댓글3']);

  // TODO: 댓글 수 보여주기
  // TODO: input 창 초기화 구현
  // TODO: 엔터쳤을 때 작동되게 구현

  const inputComment = (e) => {
      let comment = e.target.value
      setComment(comment)
  }

  const createComment = () => {
    setComments([...comments, comment])
  }

  return (
    <div>
        <div className="post-content">{post}</div>
        <div className="comment-input">
            <input type="text" onChange={inputComment}></input>
            <span className="comment-button" onClick={createComment}>댓글 등록</span>
        </div>
        <div className="comment-view">
            {
                comments.map((comment) => {
                    return <div className="comment">{comment}</div>
                })
            }
        </div>
    </div>
  );
}

export default Post;
