import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      {isLoggedIn ? (
        <div className="profile-content">
        </div>
      ) : (
        <div className="profile-locked">
        </div>
      )}
    </div>
  );
};

export default UserProfile;
