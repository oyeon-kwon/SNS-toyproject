import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import PostInput from './PostInput';

function App() {

  const [posts, setPosts] = useState(['포스트1', '포스트2', '포스트3']);

  return (
    <div className="App">
      {/* <Login /> */}
      <PostInput posts={posts} setPosts={setPosts}/>
      <Feed posts={posts} />
    </div>
  );
}

export default App;
