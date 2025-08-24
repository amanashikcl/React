import { useAuth } from '../context/AuthContext';

const StatusCard = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div className="status-card">
      <h3>Authentication Status</h3>
      <p className={`status-indicator ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
        Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}
      </p>
      <div className="status-actions">
        <button 
          className="login-btn" 
          onClick={login}
          disabled={isLoggedIn}
        >
          Login
        </button>
        <button 
          className="logout-btn" 
          onClick={logout}
          disabled={!isLoggedIn}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default StatusCard;
