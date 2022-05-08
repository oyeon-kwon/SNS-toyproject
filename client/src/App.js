import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Feed from './Feed';
import PostInput from './PostInput';
import postList from './postData';

function App() {

  // TODO: 회원가입, 로그인 구현
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postList)
  }, [])

  return (
    <div className="App">
      <Signup />
      {/* <Login /> */}
      {/* <PostInput posts={posts} setPosts={setPosts}/> */}
      {/* <Feed posts={posts} /> */}
    </div>
  );
}

export default App;
