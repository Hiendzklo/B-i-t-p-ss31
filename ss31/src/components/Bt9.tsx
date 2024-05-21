import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import './Bt9.css'

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (successMessage) {
      nameInputRef.current?.focus();
    }
  }, [successMessage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.name) {
      errors.push('Tên sinh viên không được để trống.');
    }
    if (!formData.email) {
      errors.push('Email không được để trống.');
    }
    if (!formData.password) {
      errors.push('Mật khẩu không được để trống.');
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.some((user: FormData) => user.email === formData.email)) {
      errors.push('Email đã tồn tại.');
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
      setSuccessMessage('');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const newUsers = [...existingUsers, formData];
    localStorage.setItem('users', JSON.stringify(newUsers));

    setFormData({
      name: '',
      email: '',
      password: '',
      phone: ''
    });
    setFormErrors([]);
    setSuccessMessage('Đăng ký tài khoản thành công.');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        <div>
          <label>Tên sinh viên</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ref={nameInputRef}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      {formErrors.length > 0 && (
        <div>
          {formErrors.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
