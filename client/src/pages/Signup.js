import React, { useState, useEffect, useRef } from 'react';
import './signup.css';
import userList from '../data/userData';
import { useNavigate } from 'react-router-dom';

function Signup () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameDesc = useRef();
  const passwordDesc = useRef();

  const navigate = useNavigate();

  const getInputUsername = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username === inputUsername) {
        usernameDesc.current.style.display = 'inline-block';
        usernameDesc.current.style.position = 'relative';
      } else {
        usernameDesc.current.style.display = 'none';
      }
    }
  };

  const getInputPassword = (e) => {
    const inputPassword = e.target.value;

    if (inputPassword.length < 4) {
      passwordDesc.current.style.display = 'inline-block';
      setPassword(inputPassword);
    } else {
      passwordDesc.current.style.display = 'none';
      setPassword(inputPassword);
    }
  };

  const registUser = () => {
    if (username && password) {
      userList.push({
        username: username,
        password: password
      });
      setUsername('');
      setPassword('');
      navigate('/');
    }
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      if (username && password) {
        userList.push({
          username: username,
          password: password
        });
        setUsername('');
        setPassword('');
        navigate('/');
      }
    }
  };

  return (
    <div>
      <form>
        <div className='signup-box'>
          <div className='signup-desc'>회원가입</div>
          <input type='text' placeholder='Username' className='signup-input' onChange={getInputUsername} onKeyPress={enterKey} value={username || ''} />
          <div className='username confirm-desc' ref={usernameDesc}>이미 사용 중인 닉네임입니다.</div>
          <input type='password' placeholder='Password' className='signup-input' onChange={getInputPassword} onKeyPress={enterKey} value={password || ''}/>
          <div className='password confirm-desc' ref={passwordDesc}>비밀번호는 4자리 이상이어야 합니다.</div>
          <div className='signup-button' onClick={registUser}>가입하기</div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
