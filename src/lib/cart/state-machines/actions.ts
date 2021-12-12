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

export const mutateCart = assign<CartMachineContext, CartMachineEvent>({
  cart: (context, event) =>
    event.type === 'MUTATE_CART' ? event.cart : context.cart,
});

export const mutateCheckout = assign<CartMachineContext, CartMachineEvent>({
  checkout: (context, event) =>
    event.type === 'MUTATE_CHECKOUT' ? event.checkout : context.checkout,
});

export const setOrder = assign<CartMachineContext, CartMachineEvent>({
  cart: (context, event) =>
    event.type === 'FINALIZE_CHECKOUT'
      ? event.cart ?? context.cart
      : context.cart,
  checkout: (context, event) =>
    event.type === 'FINALIZE_CHECKOUT'
      ? event.checkout ?? context.checkout
      : context.checkout,
  order: (context, event) =>
    event.type === 'FINALIZE_CHECKOUT' ? event.order : context.order,
});

export const loadOrder = assign<CartMachineContext, CartMachineEvent>(
  (context, event) => {
    if (event.type !== 'LOAD_ORDER') return context;

    const { order } = event;
    return {
      ...context,
      order,
    };
  }
);
