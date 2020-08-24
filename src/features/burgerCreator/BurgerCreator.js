import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BurgerIngredients } from './components/burgerIngredients/BurgerIngredients';
import { IngredientsManager } from './components/ingredientsManager/IngredientsManager';
import {
  selectBurger,
  saveOrder,
} from './burgerSlice';
import {
  burgerHasIngredients,
  calculateBurgerPrice,
} from '../../utils/utils';

import './BurgerCreator.css';

export function BurgerCreator() {
  const burger = useSelector(selectBurger);
  const dispatch = useDispatch();

  return (
    <>
      <BurgerIngredients />
      <div className="bottom-panel">
        <p>Current Price: <strong>{calculateBurgerPrice(burger)}</strong></p>
        <IngredientsManager { ...burger } />
        <button
          disabled={!burgerHasIngredients(burger)}
          onClick={() => dispatch(saveOrder({ ...burger }))}
          className="save-btn"
        >
          ORDER NOW
        </button>
      </div>
    </>
  );
};