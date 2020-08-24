import React from 'react';
import PropTypes from 'prop-types';

import './Ingredients.css';

export function Ingridient({
  handleDecrease,
  handleIncrease,
  isDisabled,
  label,
}) {
  return (
    <div className="ingredients">
      <p>{label}</p>
      <button 
        onClick={handleDecrease}
        disabled={isDisabled}
      >
        Less
      </button>
      <button onClick={handleIncrease}>
        More
      </button>
    </div>
  );
};

Ingridient.propTypes = {
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
};

Ingridient.defaultProps = {
  handleDecrease: () => {},
  handleIncrease: () => {},
  isDisabled: true,
  label: '',
};
