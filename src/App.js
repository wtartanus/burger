import React from 'react';
import { useSelector } from 'react-redux';

import { BurgerCreator } from './features/burgerCreator/BurgerCreator';
import { Spinner } from './components/spinner/Spinner';
import { Error } from './components/error/Error';
import { selectAppStatus } from './app/appSlice';
import { APP_STATUS } from './utils/constants';

import './App.css';

function App() {
  const appStatus = useSelector(selectAppStatus);

  const getBurgerCreator = () => (
    appStatus === APP_STATUS.REGULAR
      ? <BurgerCreator />
      : null
  );

  const getSpinner = () => (
    appStatus === APP_STATUS.LOADING
      ? <Spinner />
      : null
  );

  const getError = () => (
    appStatus === APP_STATUS.ERROR
      ? <Error />
      : null
  );
    
  return (
    <div className="App">
      { getBurgerCreator() }
      { getSpinner() }
      { getError() }
    </div>
  );
}

export default App;
