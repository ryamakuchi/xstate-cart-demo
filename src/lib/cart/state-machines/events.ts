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
  checkout,
  order,
}: {
  checkout: Checkout;
  order: Order;
}): {
  type: 'FINALIZE_CHECKOUT';
  checkout: Checkout;
  order: Order;
} => ({
  type: 'FINALIZE_CHECKOUT',
  checkout,
  order,
});

export const setEmptyEventCreator = (): {
  type: 'SET_EMPTY';
} => ({
  type: 'SET_EMPTY',
});

export type CartMachineEvent =
  | ReturnType<typeof setShopEventCreator>
  | ReturnType<typeof loadCheckoutEventCreator>
  | ReturnType<typeof setEmptyEventCreator>
  | ReturnType<typeof mutateCheckoutEventCreator>
  | ReturnType<typeof finalizeCheckoutEventCreator>;
