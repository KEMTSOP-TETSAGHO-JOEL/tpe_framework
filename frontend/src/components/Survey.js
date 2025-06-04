import React from 'react';
import axios from 'axios';
import './Survey.css'; // Assurez-vous que ce fichier existe

const Survey = ({ survey }) => {
    const handleVote = async (optionId) => {
        try {
            await axios.post(`http://localhost:5000/api/questions/${survey._id}/vote`, { optionId });
        } catch (error) {
            console.error('Erreur lors du vote :', error);
        }
    };

    return (
        <div className="survey-item">
            <h3>{survey.questionText}</h3>
            {survey.options.map(option => (
                <div key={option._id} className="option">
                    <button onClick={() => handleVote(option._id)}>
                        {option.optionText}
                    </button>
                    <span> ({option.votes} votes)</span>
                </div>
            ))}
        </div>
    );
};

export default Survey;