import React, { useState } from 'react';

const ProgressForm: React.FC = () => {
    const [progress, setProgress] = useState<number>(0);
    const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedProgress(progress);
    };

    return (
        <div>
            {submittedProgress !== null && (
                <div>
                    <h1>Tiến độ hoàn thành: {submittedProgress} %</h1>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="progress">Tiến độ hoàn thành: %</label>
                <input
                    type="range"
                    id="progress"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProgressForm;
