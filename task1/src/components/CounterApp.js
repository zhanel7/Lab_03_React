import React from 'react';
import StepCounter from './StepCounter';

function CounterApp() {
    return (
        <div style={styles.countainer}>
            <h1>Counter Application-Lab 3.1</h1>
            <p style={styles.description}>Demonstrates props, state, and uneState hook with multiple counters</p>
            <StepCounter initialValue={0}step={1}/>
            <StepCounter initialValue={10}step={5}/>
            <div style={styles.explanation}>
                <h3>Props vs State Explanation:</h3>
                <p><strong>Props</strong>(initialValue, step) are passed from parent to child and are read-only.</p>
                <p>Each counter maintains in dependent state.</p>
        </div>
    </div>
  );
}
const styles={
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
    },
    description: {
        marginBottom: '30px',
        color: '#555'
    },
    explanation:{
        marginTop:'40px',
        padding:'20px',
        backgroundColor:'#f5f5f5',
        borderRadius: '8px'
    }
};
export default CounterApp;