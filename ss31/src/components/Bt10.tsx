import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginMessage('Email và Mật khẩu không được để trống.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find((user: { email: string, password: string }) => user.email === email && user.password === password);

    if (user) {
      setLoginMessage('Đăng nhập thành công.');
    } else {
      setLoginMessage('Đăng nhập thất bại.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng nhập tài khoản</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
};

export default LoginForm;
