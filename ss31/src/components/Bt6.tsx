import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const user = {
            userName,
            email,
            password,
            rePassword
        };
        console.log(user);
    };

    return (
        <div>
            <h2>Thêm mới tài khoản</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Họ và tên</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="rePassword">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        id="rePassword"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
};

export default UserForm;
