import './login.css';
import userList from './userData';

function Login() {

  // TODO: 기능 구현

  return (
    <div>
        <form>
            <div className="login-box">
                <div className="user-box">
                <input type="text" name="" required="" />
                <label>Username</label>
                </div>
                <div className="user-box">
                <input type="password" name="" required="" />
                <label>Password</label>
                </div>
                <div className="submit-button">로그인</div>
            </div>
        </form>
    </div>
  );
}

export default Login;
