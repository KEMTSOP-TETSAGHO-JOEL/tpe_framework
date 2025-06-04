
import React  from 'react';
import CreateSurvey from './components/CreateSurvey';
import SurveyList from './components/SurveyList';

const App = () => {
    return (
        <div>
            <h1>Mini Outil de Sondage</h1>
            <CreateSurvey />
            <SurveyList />
        </div>
    );
};

export default App;