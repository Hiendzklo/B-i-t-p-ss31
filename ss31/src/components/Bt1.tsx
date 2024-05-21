import React, { useState } from 'react';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ email });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmailForm;
