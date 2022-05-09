import React, { useState, useEffect } from 'react';
import './post.css';

function Post ({ post }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(post.comment);
  }, [post.comment]);

  const inputComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const createComment = () => {
    if (comment === '') {

    } else {
      post.comment.unshift(comment);
      setComments(post.comment);
      setComment('');
    }
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      if (comment === '') {

      } else {
        post.comment.unshift(comment);
        setComments(post.comment);
        setComment('');
      }
    }
  };

  return (
    <div className='posts'>
      <div className='post-content'>
        {post.content}
        <div className='comment-count'>댓글 {comments.length}개</div>
      </div>
      <div className='comment-input-box'>
        <input className='comment-input' type='text' placeholder='댓글을 입력하세요' onChange={inputComment} onKeyPress={enterKey} value={comment} />
        <span className='comment-button' onClick={createComment}>댓글 등록</span>
      </div>
      <div className='comment-view-box'>
        {
              comments.map((comment, id) => {
                return <div className='comment' key={id}>{comment}</div>;
              })
            }
      </div>
    </div>
  );
}

export default Post;
