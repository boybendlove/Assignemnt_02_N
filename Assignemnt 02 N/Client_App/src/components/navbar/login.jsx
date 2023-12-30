// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    // Thực hiện xác thực tài khoản ở phía backend
    // Nếu thành công, gọi onLogin và chuyển hướng đến trang chính
    // Nếu không thành công, hiển thị thông báo lỗi
    // Ví dụ sử dụng axios để gửi request đến API
    try {

      const response = await axios.post('/api/login', { username, password });
      const data = response.data;
      onLogin(data);
      history.push('/');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
