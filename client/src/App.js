import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import PostInput from './PostInput';

function App() {

  // TODO: 회원가입, 로그인 구현

  const [posts, setPosts] = useState(['동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세.']);

  return (
    <div className="App">
      {/* <Login /> */}
      <PostInput posts={posts} setPosts={setPosts}/>
      <Feed posts={posts} />
    </div>
  );
}

export default App;
