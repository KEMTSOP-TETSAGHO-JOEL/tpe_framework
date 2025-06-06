import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import Survey from './Survey';
import './SurveyList.css';

const SurveyList = () => {
    const [surveys, setSurveys] = useState([]);
    const socket = socketIOClient('http://localhost:5000');

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/questions');
                setSurveys(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des sondages :', error);
            }
        };

        fetchSurveys();

        socket.on('newQuestion', (newSurvey) => {
            setSurveys((prevSurveys) => [...prevSurveys, newSurvey]);
        });

        socket.on('voteUpdated', (updatedSurvey) => {
            setSurveys((prevSurveys) =>
                prevSurveys.map((survey) => 
                    survey._id === updatedSurvey._id ? updatedSurvey : survey
                )
            );
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <div className="survey-list">
            <h2>Liste des Sondages</h2>
            {surveys.map(survey => (
                <Survey key={survey._id} survey={survey} setSurveys={setSurveys} />
            ))}
        </div>
    );
};

export default SurveyList;