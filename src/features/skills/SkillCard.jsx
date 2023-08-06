import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({
  image, title, details, features,
}) => {
  const anything = 'helot bc';
  return (
    <div style={{ width: 'inherit' }}>
      <img src={image} alt={title} />
      <h1>{details}</h1>
      <h1>{features}</h1>
      <h1>{anything}</h1>
    </div>
  );
};

SkillCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
