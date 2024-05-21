import React, { useState } from 'react';

const DateForm: React.FC = () => {
    const [date, setDate] = useState<string>('');
    const [submittedDate, setSubmittedDate] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedDate(date);
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return {
            formatted: date.toISOString().split('T')[0], // YYYY-MM-DD format
            localeFormatted: date.toLocaleDateString('en-GB', options) // DD/MM/YYYY format
        };
    };

    return (
        <div>
            {submittedDate && (
                <div>
                    <h1>Ngày sinh: {formatDate(submittedDate).formatted}</h1>
                    <p>{formatDate(submittedDate).localeFormatted}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="dob">Ngày sinh:</label>
                <input
                    type="date"
                    id="dob"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DateForm;
