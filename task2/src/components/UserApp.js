import React, { useState } from 'react';
import UserProfile from './UserProfile';
function UserApp() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  return (
    <div style={styles.container}>
      <h1>User Data Fetcher - Lab 3.2</h1>
      <p>Demonstrating useEffect, cleanup, and dependency arrays.</p>
      <div style={styles.buttonGroup}>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => setSelectedUserId(id)}
            style={selectedUserId === id ? styles.activeBtn : styles.btn}
          >
            User {id}
          </button>
        ))}
      </div>
      <UserProfile userId={selectedUserId} />
      <div style={styles.explanation}>
        <h3>How useEffect Works:</h3>
        <p><strong>Dependency Array:</strong> Effect runs when userId changes.</p>
        <p><strong>Cleanup:</strong> Aborts previous fetch on unmount or userId change.</p>
        <p><strong>AbortController:</strong> Prevents memory leaks.</p>
      </div>
    </div>
  );
}
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    margin: '20px 0',
    flexWrap: 'wrap'
  },
  btn: {
    padding: '10px 15px',
    backgroundColor: '#9C27B0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  activeBtn: {
    padding: '10px 15px',
    backgroundColor: '#7B1FA2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  explanation: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f3e5f5',
    borderRadius: '8px'
  }
};
export default UserApp;