import React from 'react';
import { useSelector } from 'react-redux';

import { selectBurger } from '../../burgerSlice';
import { burgerHasIngredients } from '../../../../utils/utils';

import './BurgerIngredients.css';

export function BurgerIngredients() {
  const burger = useSelector(selectBurger);

  const getNoIngredients = () => (
    !burgerHasIngredients(burger)
      ? <p>Please start adding ingredients</p>
      : null
  );

  const getSaladLayer = () => {
    const { salad } = burger;

    return Array(salad)
      .fill(null)
      .map((value, i) => <div className="salad-layer" key={i}></div>);
  };

  const getMeetLayer = () => {
    const { meet } = burger;

    return Array(meet)
      .fill(null)
      .map((value, i) => <div className="meet-layer" key={i}></div>);
  };

  const getCheeseLayer = () => {
    const { cheese } = burger;

    return Array(cheese)
      .fill(null)
      .map((value, i) => <div className="cheese-layer" key={i}></div>);
  };

  const getBaconLayer = () => {
    const { bacon } = burger;

    return Array(bacon)
      .fill(null)
      .map((value, i) => <div className="bacon-layer" key={i}></div>);
  };

  return (
    <div className="burger-ingredients">
      <div className="top-bun"></div>
        { getNoIngredients() }
        { getBaconLayer() }
        { getCheeseLayer() }
        { getMeetLayer() }
        { getSaladLayer() }
      <div className="bottom-bun"></div>
    </div>
  );
}