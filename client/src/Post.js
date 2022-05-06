import React, { useState } from "react";
import "./post.css";

function Post({ post }) {

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([]);

  // TODO: 아악 코멘트가 이상해.. 3번째 게시물 코멘트가 새로운 글을 입력하면 2번째 게시물 코멘트로 바뀜

  const inputComment = (e) => {
      let comment = e.target.value
      setComment(comment)
  }

  const createComment = () => {
    if(comment === "") {
      return;
    } else {
      setComments([comment, ...comments])
      setComment("")
    }
  }

  const enterKey = () => {
    if(window.event.keyCode === 13) {
      if(comment === "") {
        return;
      } else {
        setComments([comment, ...comments])
        setComment("")
      }
    }
  }

  return (
    <div className="posts">
        <div className="post-content">
          {post}
          <div className="comment-count">댓글 {comments.length}개</div>          
        </div>
        <div className="comment-input-box">
            <input className="comment-input" type="text" placeholder="댓글을 입력하세요" onChange={inputComment} onKeyPress={enterKey} value={comment}></input>
            <span className="comment-button" onClick={createComment}>댓글 등록</span>
        </div>
        <div className="comment-view-box">
            {
                comments.map((comment, id) => {
                    return <div className="comment" key={id}>{comment}</div>
                })
            }
        </div>
    </div>
  );
}

export default Post;
