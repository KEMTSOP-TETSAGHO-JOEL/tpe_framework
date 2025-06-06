import React, { useState } from 'react';
import axios from 'axios';
import './Survey.css'; // Assurez-vous que ce fichier existe

const Survey = ({ survey, setSurveys }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(survey.questionText);

    const handleVote = async (optionId) => {
        try {
            await axios.post(`http://localhost:5000/api/questions/${survey._id}/vote`, { optionId });
        } catch (error) {
            console.error('Erreur lors du vote :', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/questions/${survey._id}`);
            setSurveys(prevSurveys => prevSurveys.filter(s => s._id !== survey._id));
        } catch (error) {
            console.error('Erreur lors de la suppression du sondage :', error);
        }
    };

    const handleEdit = async () => {
        try {
            const updatedSurvey = { questionText: newText, options: survey.options }; // Incluez les options si nécessaire
            const response = await axios.put(`http://localhost:5000/api/questions/${survey._id}`, updatedSurvey);
            setSurveys(prevSurveys => 
                prevSurveys.map(s => (s._id === survey._id ? response.data : s))
            );
            setIsEditing(false);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du sondage :', error);
        }
    };

    return (
        <div className="survey-item">
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={newText} 
                        onChange={(e) => setNewText(e.target.value)} 
                    />
                    <button onClick={handleEdit}>Sauvegarder</button>
                    <button onClick={() => setIsEditing(false)}>Annuler</button>
                </div>
            ) : (
                <h3>{survey.questionText}</h3>
            )}
            {survey.options.map(option => (
                <div key={option._id} className="option">
                    <button onClick={() => handleVote(option._id)}>
                        {option.optionText}
                    </button>
                    <span> ({option.votes} votes)</span>
                </div>
            ))}
            <button onClick={handleDelete}>Supprimer</button>
            <button onClick={() => setIsEditing(true)}>Modifier</button>
        </div>
    );
};

export default Survey;