import React, { useState } from 'react';

function StepCounter({ initialValue = 0, step = 1 }) {
  
  const [count, setCount] = useState(initialValue);
 
  const [history, setHistory] = useState([initialValue]);
  
  const [operationCount, setOperationCount] = useState(0);
  
  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory(prev => [...prev, newCount]);
    setOperationCount(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory(prev => [...prev, newCount]);
    setOperationCount(prev => prev + 1);
  };
  
  const handleReset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };
  
  const getLastFive = () => {
    return history.length <= 5 ? history : history.slice(-5);
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Step Counter</h2>
      <div style={styles.propsInfo}>
        <p>Initial Value: <strong>{initialValue}</strong></p>
        <p>Step Size: <strong>{step}</strong></p>
      </div>
      <p style={styles.countDisplay}>Current Count: <strong>{count}</strong></p>
      <div style={styles.buttonGroup}>
        <button onClick={handleDecrement} style={styles.decrementBtn}>
          Decrement (-{step})
        </button>
        <button onClick={handleIncrement} style={styles.incrementBtn}>
          Increment (+{step})
        </button>
      </div>
      <div style={styles.stats}>
        <h3>Statistics</h3>
        <p>Total Operations: <strong>{operationCount}</strong></p>
        <p>Last 5 Values: <strong>{getLastFive().join(', ')}</strong></p>
      </div>
      <button onClick={handleReset} style={styles.resetBtn}>Reset</button>
    </div>
  );
}
const styles = {
  container: {
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#f9f9f9'
  },
  title: { color: '#2E7D32', textAlign: 'center' },
  propsInfo: {
    backgroundColor: '#E8F5E9',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0'
  },
  countDisplay: {
    fontSize: '24px',
    color: '#2196F3',
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0'
  },
  decrementBtn: {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  incrementBtn: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  stats: {
    backgroundColor: '#E3F2FD',
    padding: '15px',
    borderRadius: '8px',
    margin: '15px 0'
  },
  resetBtn: {
    padding: '10px 20px',
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%'
  }
};
export default StepCounter;