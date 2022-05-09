import React, { useState } from 'react';
import './login.css';
import userList from '../data/userData';
import { useNavigate } from 'react-router-dom';

function Login ({ setIsLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const getInputUsername = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
  };

  const getInputPassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    console.log(password);
  };

  const login = () => {
    if (username && password) {
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].username === username && userList[i].password === password) {
          alert('로그인 되었습니다.');
          setIsLogin(true);
          navigate('/');
        } else if (userList[i].username === username) {
          alert('비밀번호가 일치하지 않습니다.');
        } else {
          alert('아이디와 비밀번호가 일치하지 않습니다.');
        }
      }
    } else if (username) {
      alert('비밀번호를 입력하세요.');
    } else if (password) {
      alert('아이디를 입력하세요.');
    } else {
      alert('아이디와 비밀번호를 모두 입력하세요.');
    }
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      if (username && password) {
        for (let i = 0; i < userList.length; i++) {
          if (userList[i].username === username && userList[i].password === password) {
            alert('로그인 되었습니다.');
            setIsLogin(true);
          } else if (userList[i].username === username) {
            alert('비밀번호가 일치하지 않습니다.');
          } else {
            alert('아이디와 비밀번호가 일치하지 않습니다.');
          }
        }
      } else if (username) {
        alert('비밀번호를 입력하세요.');
      } else if (password) {
        alert('아이디를 입력하세요.');
      } else {
        alert('아이디와 비밀번호를 모두 입력하세요.');
      }
    }
  };

  return (
    <div>
      <form>
        <div className='login-box'>
          <div className='user-box'>
            <input type='text' name='' required='' onChange={getInputUsername} onKeyPress={enterKey} />
            <label>Username</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required='' onChange={getInputPassword} onKeyPress={enterKey} />
            <label>Password</label>
          </div>
          <div className='submit-button' onClick={login}>로그인</div>
        </div>
      </form>
    </div>
  );
}

export default Login;
