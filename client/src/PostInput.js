import React, { useState } from 'react';
import './postInput.css';

function PostInput({ posts, setPosts }) {

  const [content, setContent] = useState('')

  // TODO: input 창 초기화 구현
  // TODO: 엔터쳤을 때 작동되게 구현
  // TODO: 아무것도 입력하지 않았을 때는 작동 안되게 구현

  const inputContent = (e) => {
    let content = e.target.value
    setContent(content)
  }

  const createPost = () => {
    setPosts([content, ...posts])
  }

  return (
    <div className="post-input-box">
        <input className="post-input" placeholder="내용을 입력하세요" type="text" onChange={inputContent}></input>
        <div className="post-button" onClick={createPost}>Post</div>
    </div>
  );
}

export default PostInput;
