import React, { useState, useEffect } from 'react';
function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);
  const fetchUser = async (id, controller) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { signal: controller.signal }
      );
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setUser(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    setAbortController(controller);
    fetchUser(userId, controller);
    return () => controller.abort();
  }, [userId]);
  const handleRefresh = () => {
    if (abortController) abortController.abort();
    const randomId = Math.floor(Math.random() * 10) + 1;
    const newController = new AbortController();
    setAbortController(newController);
    fetchUser(randomId, newController);
  };
  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (error) return (
    <div style={styles.container}>
      <h3>Error: {error}</h3>
      <button onClick={handleRefresh} style={styles.button}>Retry</button>
    </div>
  );
  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      {user && (
        <div style={styles.userInfo}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
      <button onClick={handleRefresh} style={styles.button}>
        Refresh (Random User)
      </button>
      <div style={styles.note}>
        useEffect runs when userId changes. Cleanup function aborts previous request.
      </div>
    </div>
  );
}
const styles = {
  container: {
    border: '2px solid #9C27B0',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#f5f5f5'
  },
  loading: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '18px'
  },
  userInfo: {
    backgroundColor: '#EDE7F6',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#9C27B0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  note: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#666'
  }
};
export default UserProfile;