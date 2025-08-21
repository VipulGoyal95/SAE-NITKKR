// utils.js
import { load } from '@cashfreepayments/cashfree-js';

let cachedCashfree = null;

export const getCashfree = async () => {
  if (!cachedCashfree) {
    cachedCashfree = await load({
      mode: "production",
    });
  }
  return cachedCashfree;
};
