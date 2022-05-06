import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import PostInput from './PostInput';
import postList from './Data';

function App() {

  // TODO: 회원가입, 로그인 구현
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postList)
  }, [])

  return (
    <div className="App">
      <Login />
      {/* <PostInput posts={posts} setPosts={setPosts}/>
      <Feed posts={posts} /> */}
    </div>
  );
}

export default App;
