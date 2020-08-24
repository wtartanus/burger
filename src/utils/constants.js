export const APP_STATUS = Object.freeze({
  REGULAR: 'regular',
  LOADING: 'loading',
  ERROR: 'error',
});

export const BURGER_INGREDIENTS = Object.freeze({
  salad: {
    id: 'salad',
    price: 1,
  },
  bacon: {
    id: 'bacon',
    price: 2,
  },
  cheese: {
    id: 'cheese',
    price: 1,
  },
  meet: {
    id: 'meet',
    price: 10,
  }
});

export const ORDERS_URL = 'https://burger-6b495.firebaseio.com/orders.json';
