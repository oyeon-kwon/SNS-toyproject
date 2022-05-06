import React, { useEffect, useState } from 'react';
import './postInput.css';

function PostInput({ posts, setPosts }) {

  const [content, setContent] = useState("")

  const inputContent = (e) => {
    let content = e.target.value
    setContent(content)
  }

  const createPost = () => {
    if(content === "") {
      return;
    } else {
      setPosts([content, ...posts])
      setContent("")
    }
  }

  const enterKey = () => {
    if(window.event.keyCode === 13) {
      if(content === "") {
        return;
      } else {
        setPosts([content, ...posts])
        setContent("")
      }
    }
  }

  return (
    <div className="post-input-box">
        <input className="post-input" placeholder="내용을 입력하세요" type="text" value={content} onChange={inputContent} onKeyPress={enterKey}></input>
        <div className="post-button" onClick={createPost}>게시</div>
    </div>
  );
}

export default PostInput;
