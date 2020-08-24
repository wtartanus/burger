import React from 'react';
import { useDispatch } from 'react-redux';

import { setStatus } from '../../app/appSlice';
import { APP_STATUS } from '../../utils/constants';

import './Error.css';

export function Error() {
  const dispatch = useDispatch();

  return (
    <div className="error-container">
      <div className="error">
        <p className="error-text">Sorry, something went wrong :(</p>
        <button
          onClick={() => dispatch(setStatus(APP_STATUS.REGULAR))}
          className="error-btn"
        >
          Return
        </button>
      </div>
    </div>
  );
};
