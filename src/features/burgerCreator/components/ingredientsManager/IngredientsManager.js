import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Ingridient } from '../ingredients/Ingredients';

import {
  incrementIngridient,
  decrementIngridient,
} from '../../burgerSlice';
import { BURGER_INGREDIENTS } from '../../../../utils/constants';

export function IngredientsManager({
  salad,
  bacon,
  cheese,
  meet,
}) {
  const dispatch = useDispatch();

  const decrement = key => dispatch(decrementIngridient(key));
  const increment = key => dispatch(incrementIngridient(key));

  return (
    <>
      <Ingridient
        label="Salad"
        handleDecrease={() => decrement(BURGER_INGREDIENTS.salad.id)}
        isDisabled={!Boolean(salad)}
        handleIncrease={() => increment(BURGER_INGREDIENTS.salad.id)}
      />
      <Ingridient
        label="Bacon"
        handleDecrease={() => decrement(BURGER_INGREDIENTS.bacon.id)}
        isDisabled={!Boolean(bacon)}
        handleIncrease={() => increment(BURGER_INGREDIENTS.bacon.id)}
      />
      <Ingridient
        label="Cheese"
        handleDecrease={() => decrement(BURGER_INGREDIENTS.cheese.id)}
        isDisabled={!Boolean(cheese)}
        handleIncrease={() => increment(BURGER_INGREDIENTS.cheese.id)}
      />
      <Ingridient
        label="Meet"
        handleDecrease={() => decrement(BURGER_INGREDIENTS.meet.id)}
        isDisabled={!Boolean(meet)}
        handleIncrease={() => increment(BURGER_INGREDIENTS.meet.id)}
      />
    </>
  );
};

IngredientsManager.propTypes = {
  salad: PropTypes.number,
  bacon: PropTypes.number,
  cheese: PropTypes.number,
  meet: PropTypes.number,
};

IngredientsManager.defaultProps = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meet: 0,
};
