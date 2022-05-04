import React, { useState } from 'react';
import './postInput.css';

function PostInput({ posts, setPosts }) {

  const [content, setContent] = useState('')

  // TODO: input 창 초기화 구현
  // TODO: 엔터쳤을 때 작동되게 구현

  const inputContent = (e) => {
    let content = e.target.value
    setContent(content)
  }

  const createPost = () => {
    setPosts([...posts, content])
  }

  return (
    <div>
        <input type="text" onChange={inputContent}></input>
        <div className="post-button" onClick={createPost}>Post</div>
    </div>
  );
}

export default PostInput;
