import {useState} from 'react';

const useCounter = (counterTime) => {
    
    const [timerId, updateTimerId] = useState(null);
    const [remainingTime, updateRemainingTime] = useState(null);
    const [intervalId, updateIntervalId] = useState(null);

    const startTimer = () => {
        const handleStartTimer = (temp) => {
            const timerinterval = setInterval(() => {
                updateRemainingTime((time) => time - 1);
            }, 1000);
            const tid = setTimeout(() => {
                clearInterval(timerinterval);
                updateTimerId(null);
                updateRemainingTime(null);
                updateIntervalId(null);
                alert('timer ran out');
            }, temp);
            updateTimerId(tid);
            updateIntervalId(timerinterval);
        };

        if (!timerId || timerId == '') {
            if (remainingTime) {
                handleStartTimer(remainingTime * 1000);
            } else {
                updateRemainingTime(Math.floor(counterTime));
                handleStartTimer(counterTime * 1000);
            }
            
        } else {
            console.log('timer already started');
        }
    };

    const pauseTimer = () => {
        if (timerId) {
            clearTimeout(timerId);
            clearInterval(intervalId);
            updateIntervalId(null);
            updateTimerId('');
        }
    };

    const resetTimer = () => {
        if (timerId || timerId == '') {
            clearTimeout(timerId);
            clearInterval(intervalId);
            updateIntervalId(null);
            updateTimerId(null);
            updateRemainingTime(null);
        }
    };
    
    return [!!timerId, startTimer, pauseTimer, resetTimer, remainingTime];
};

export default useCounter;
