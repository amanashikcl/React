import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isLoggedIn, toggleLogin } = useAuth();

  return (
    <div className="header">
      <h1>Login Status Dashboard</h1>
      <div className="user-status">
        {isLoggedIn ? (
          <h2>Welcome User!</h2>
        ) : (
          <h2>Please Login</h2>
        )}
      </div>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button 
        onClick={toggleLogin}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Header;
