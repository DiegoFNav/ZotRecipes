
import PropTypes from 'prop-types';

// The card component will take in a name and imageUrl as props
const MainPageCard = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      {/* You can add more details here as needed */}
    </div>
  );
};

// PropTypes for type checking
MainPageCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MainPageCard;
