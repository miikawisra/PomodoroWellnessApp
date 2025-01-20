import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        setIsActive(false);
                        alert('Pomodoro päättyi! Ota tauko!');
                    } else {
                        setMinutes((prev) => prev - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [minutes, seconds, isActive]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
    };

    return (
        <div className="pomodoro-timer">
            <h2>Pomodoro-ajastin</h2>
            <div>
                <span>{String(minutes).padStart(2, '0')}:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
            <button onClick={toggleTimer}>
                {isActive ? 'Pysäytä' : 'Aloita'}
            </button>
            <button onClick={resetTimer}>Nollaa</button>
        </div>
    );
}

export default PomodoroTimer;
