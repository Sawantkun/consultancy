import './ProfileCard.css';

const ProfileCard = ({ image, name }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {image ? (
          <img src={image} alt={name || 'Member'} />
        ) : (
          <div className="profile-placeholder">
            <div className="profile-face">
              <div className="eye"></div>
              <div className="eye"></div>
              <div className="mouth"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
