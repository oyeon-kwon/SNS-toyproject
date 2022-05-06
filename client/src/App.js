import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import PostInput from './PostInput';

function App() {

  const [posts, setPosts] = useState(['동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 남산 위에 저 소나무 철갑을 두른 듯, 바람 서리 불변함은 우리 기상일세', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']);

  return (
    <div className="App">
      {/* <Login /> */}
      <PostInput posts={posts} setPosts={setPosts}/>
      <Feed posts={posts} />
    </div>
  );
}

export default App;
