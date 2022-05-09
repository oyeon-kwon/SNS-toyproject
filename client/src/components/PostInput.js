import React, { useState } from 'react';
import './postInput.css';
import { useNavigate } from 'react-router-dom';

function PostInput ({ posts, setPosts, isLogin }) {
  const [content, setContent] = useState({});
  const navigate = useNavigate();

  const inputContent = (e) => {
    const content = e.target.value;

    const fullContent = {
      content: content,
      comment: []
    };
    setContent(fullContent);
  };

  const createPost = () => {
    if (content.content === '') {

    } else {
      setPosts([content, ...posts]);
      setContent({
        content: '',
        comment: []
      });
    }
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      if (content.content === '') {

      } else {
        setPosts([content, ...posts]);
        setContent({
          content: '',
          comment: []
        });
      }
    }
  };

  const directLogin = () => {
    navigate('/login');
  };

  return (
    <div className='post-input-box'>
      {
        isLogin
          ? <>
            <input className='post-input' placeholder='내용을 입력하세요' type='text' value={content.content || ''} onChange={inputContent} onKeyPress={enterKey} />
            <div className='post-button' onClick={createPost}>게시</div>
          </>
          : <>
            <input className='post-input' placeholder='게시글 작성 기능은 로그인 후 이용할 수 있습니다.' type='text' value='' readOnly />
            <div className='post-button' onClick={directLogin}>로그인</div>
          </>
      }

    </div>
  );
}

export default PostInput;
