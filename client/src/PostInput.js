import React, { useEffect, useState } from 'react';
import './postInput.css';

function PostInput({ posts, setPosts }) {

  const [content, setContent] = useState({})

  const inputContent = (e) => {
    let content = e.target.value
    //!
    let realcontent = {
      "content": content,
      "comment": []
    }
    setContent(realcontent)
  }

  const createPost = () => {
    if(content.content === "") {
      return;
    } else {
      setPosts([content, ...posts])
      setContent({
        "content": "",
        "comment": []
      })
    }
  }

  const enterKey = () => {
    if(window.event.keyCode === 13) {
      if(content.content === "") {
        return;
      } else {
        setPosts([content, ...posts])
        setContent({
          "content": "",
          "comment": []
        })
      }
    }
  }

  return (
    <div className="post-input-box">
        <input className="post-input" placeholder="내용을 입력하세요" type="text" value={content.content} onChange={inputContent} onKeyPress={enterKey}></input>
        <div className="post-button" onClick={createPost}>게시</div>
    </div>
  );
}

export default PostInput;
