import React, { useState } from 'react';
import './post.css';

function Post({ post }) {

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(['댓글1', '댓글2', '댓글3']);

  // TODO: 댓글 수 보여주기
  // TODO: input 창 초기화 구현
  // TODO: 엔터쳤을 때 작동되게 구현
  // TODO: 아무것도 입력하지 않았을 때는 작동 안되게 구현

  const inputComment = (e) => {
      let comment = e.target.value
      setComment(comment)
  }

  const createComment = () => {
    setComments([comment, ...comments])
  }

  return (
    <div className="posts">
        <div className="post-content">
          {post}
          
        </div>
        <div className="comment-count">댓글 {comments.length}개</div>
        <div className="comment-input-box">
            <input className="comment-input" type="text" placeholder="댓글을 입력하세요" onChange={inputComment}></input>
            <span className="comment-button" onClick={createComment}>댓글 등록</span>
        </div>
        <div className="comment-view-box">
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
