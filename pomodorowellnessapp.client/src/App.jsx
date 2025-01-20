import React from 'react';
import './App.css';
import PomodoroTimer from './components/PomodoroTimer';
import Checklist from './components/Checklist';

function App() {
    return (
        <div className="App">
            <h1>P�ivitt�inen hyvinvointirutiini</h1>
            <PomodoroTimer />
            <Checklist />
        </div>
    );
}

export default App;
