import React, { useState } from 'react';
import Login from './components/Login';
import WeddingInfo from './components/WeddingInfo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = (username: string, fullName: string) => {
    setIsLoggedIn(true);
    setGuestName(fullName);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setGuestName('');
    setUsername('');
  };

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <WeddingInfo guestName={guestName} username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;