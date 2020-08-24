import { BURGER_INGREDIENTS } from './constants';

export function assertResponseIsSuccessfull(response) {
  if (response.status !== 200) {
      throw new Error('Failed request');
  }
};

export const burgerHasIngredients = (burger) => (
  Object.keys(burger)
    .filter(key => Boolean(burger[key]))
    .length
);

export const calculateBurgerPrice = (burger) => (
  Object.keys(burger)
    .reduce((price, key) => (
      price += BURGER_INGREDIENTS[key].price * burger[key]
    ), 0)
);
