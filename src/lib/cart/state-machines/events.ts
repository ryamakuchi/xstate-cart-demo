import { Customer, Cart, Checkout, Order } from '../../api/model/index';

export const setShopEventCreator = ({
  shopId,
}: {
  shopId: string;
}): {
  type: 'SET_SHOP';
  shopId: string;
} => ({
  type: 'SET_SHOP',
  shopId,
});

export const loadCheckoutEventCreator = ({
  customer,
  cart,
  checkout,
}: {
  customer: Customer;
  cart: Cart;
  checkout: Checkout;
}): {
  type: 'LOAD_CHECKOUT';
  customer: Customer;
  cart: Cart;
  checkout: Checkout;
} => ({
  type: 'LOAD_CHECKOUT',
  customer,
  cart,
  checkout,
});

export const mutateCartEventCreator = ({
  cart,
}: {
  cart: Cart;
}): {
  type: 'MUTATE_CART';
  cart: Cart;
} => ({
  type: 'MUTATE_CART',
  cart,
});

export const mutateCheckoutEventCreator = ({
  checkout,
}: {
  checkout: Checkout;
}): {
  type: 'MUTATE_CHECKOUT';
  checkout: Checkout;
} => ({
  type: 'MUTATE_CHECKOUT',
  checkout,
});

export const finalizeCheckoutEventCreator = ({
  checkoutId,
  cart,
  checkout,
  order,
}: {
  checkoutId: string;
  cart?: Cart;
  checkout?: Checkout;
  order: Order;
}): {
  type: 'FINALIZE_CHECKOUT';
  checkoutId: string;
  cart?: Cart;
  checkout?: Checkout;
  order: Order;
} => ({
  type: 'FINALIZE_CHECKOUT',
  checkoutId,
  cart,
  checkout,
  order,
});

export const setEmptyEventCreator = (): {
  type: 'SET_EMPTY';
} => ({
  type: 'SET_EMPTY',
});

export const loadOrderEventCreator = ({
  order,
}: {
  order: Order;
}): {
  type: 'LOAD_ORDER';
  order: Order;
} => ({
  type: 'LOAD_ORDER',
  order,
});

export type CartMachineEvent =
  | ReturnType<typeof setShopEventCreator>
  | ReturnType<typeof loadCheckoutEventCreator>
  | ReturnType<typeof setEmptyEventCreator>
  | ReturnType<typeof loadOrderEventCreator>
  | ReturnType<typeof mutateCartEventCreator>
  | ReturnType<typeof mutateCheckoutEventCreator>
  | ReturnType<typeof finalizeCheckoutEventCreator>;
