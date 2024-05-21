import React, { useState, ChangeEvent, FormEvent } from 'react';

const GenderForm: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [submittedGender, setSubmittedGender] = useState<string>('');

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedGender(selectedGender);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Giới tính: {submittedGender}</label>
          <div>
            <input
              type="radio"
              value="Nam"
              checked={selectedGender === 'Nam'}
              onChange={handleGenderChange}
            />
            <label>Nam</label>
          </div>
          <div>
            <input
              type="radio"
              value="Nữ"
              checked={selectedGender === 'Nữ'}
              onChange={handleGenderChange}
            />
            <label>Nữ</label>
          </div>
          <div>
            <input
              type="radio"
              value="Khác"
              checked={selectedGender === 'Khác'}
              onChange={handleGenderChange}
            />
            <label>Khác</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GenderForm;
