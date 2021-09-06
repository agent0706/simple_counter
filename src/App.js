import './App.css';
import useCounter from './useCounter';

function App() {
  const [isRunning, start, pause, reset, remainingTime] = useCounter(10);

  return (
    <>
    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>
    <button onClick={reset}>reset</button>
    <div>is timer running: {isRunning ? 'yes' : 'no'}</div>
    {remainingTime ? <div>remaining time: {remainingTime}</div> : null}
    </>
  );
}

export default App;
