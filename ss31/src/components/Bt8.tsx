import React, { useState, ChangeEvent, FormEvent } from 'react';

const HobbiesForm: React.FC = () => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [submittedHobbies, setSubmittedHobbies] = useState<string[]>([]);

  const handleHobbyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedHobbies([...selectedHobbies, value]);
    } else {
      setSelectedHobbies(selectedHobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedHobbies(selectedHobbies);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sở thích: {JSON.stringify(submittedHobbies)}</label>
          <div>
            <input
              type="checkbox"
              value="Đá bóng"
              checked={selectedHobbies.includes('Đá bóng')}
              onChange={handleHobbyChange}
            />
            <label>Đá bóng</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Bóng chuyền"
              checked={selectedHobbies.includes('Bóng chuyền')}
              onChange={handleHobbyChange}
            />
            <label>Bóng chuyền</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Code"
              checked={selectedHobbies.includes('Code')}
              onChange={handleHobbyChange}
            />
            <label>Code</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Bơi lội"
              checked={selectedHobbies.includes('Bơi lội')}
              onChange={handleHobbyChange}
            />
            <label>Bơi lội</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HobbiesForm;
