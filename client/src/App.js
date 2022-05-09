import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feed from './pages/Feed';
import postList from './data/postData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './data/moneelab.png';

function App () {
  const [posts, setPosts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setPosts(postList);
  }, []);

  const logout = () => {
    isLogin(false);
  };

  return (
    <div>
      <Router>
        <div className='nav'>
          <span className='home-box'>
            <span className='nav-link'>
              <Link to='/'><img src={logo} className='logo' /></Link>
            </span>
          </span>
          <span className='signup-login-box'>
            <span className='nav-link'>
              {
              isLogin ? <Link to='/' onClick={logout}>로그아웃</Link>
                : <Link to='/login'>로그인</Link>
            }

            </span>
            <span className='nav-link'>
              <Link to='/signup'>회원가입</Link>
            </span>
          </span>
        </div>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
          <Route path='/' element={<Feed posts={posts} setPosts={setPosts} isLogin={isLogin} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
