import React, { useState } from 'react';
import axios from 'axios';
import './CreateSurvey.css'; // Assurez-vous que ce fichier existe

const CreateSurvey = () => {
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['']);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSurvey = {
            questionText,
            options: options.map(option => ({ optionText: option })),
        };

        try {
            await axios.post('http://localhost:5000/api/questions', newSurvey);
            setQuestionText('');
            setOptions(['']);
        } catch (error) {
            console.error('Erreur lors de la création du sondage :', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="survey-form">
            <h2>Créer un Sondage</h2>
            <input
                type="text"
                placeholder="Question"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
            />
            {options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    required
                />
            ))}
            <button type="button" onClick={addOption}>Ajouter une Option</button>
            <button type="submit">Créer le Sondage</button>
        </form>
    );
};

export default CreateSurvey;