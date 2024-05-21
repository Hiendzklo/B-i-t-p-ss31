import React, { useState } from 'react';

const ColorForm: React.FC = () => {
    const [color, setColor] = useState<string>('#000000');
    const [submittedColor, setSubmittedColor] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedColor(color);
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <h1>Color: {submittedColor}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Form</label>
                <br />
                <label htmlFor="color">Màu sắc</label>
                <input
                    type="color"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ColorForm;
