import { assign } from 'xstate';

import { CartMachineContext } from './context';
import { CartMachineEvent } from './events';

export const setShop = assign<CartMachineContext, CartMachineEvent>({
  shopId: (context, event) =>
    event.type === 'SET_SHOP' ? event.shopId : context.shopId,
});

export const loadCheckout = assign<CartMachineContext, CartMachineEvent>(
  (context, event) => {
    if (event.type !== 'LOAD_CHECKOUT') return context;

    const { customer, cart, checkout } = event;
    return {
      ...context,
      customer,
      cart,
      checkout,
    };
  }
);

export const mutateCheckout = assign<CartMachineContext, CartMachineEvent>({
  checkout: (context, event) =>
    event.type === 'MUTATE_CHECKOUT' ? event.checkout : context.checkout,
});

export const setOrder = assign<CartMachineContext, CartMachineEvent>({
  checkout: (context, event) =>
    event.type === 'FINALIZE_CHECKOUT'
      ? event.checkout ?? context.checkout
      : context.checkout,
  order: (context, event) =>
    event.type === 'FINALIZE_CHECKOUT' ? event.order : context.order,
});
