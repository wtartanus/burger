import { ORDERS_URL } from '../utils/constants';

export function postBurger(payload) {
    return fetch(ORDERS_URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
    });
};
