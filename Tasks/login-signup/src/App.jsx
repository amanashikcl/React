import { useState } from 'react'
import AuthContext from './context/AuthContext'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    toggleLogin,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      <div className="app">
        <Header />
        <div className="main-content">
          <UserProfile />
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default App
