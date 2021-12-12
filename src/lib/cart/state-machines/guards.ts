import { isCart, isCheckout, isCustomer, isOrder } from '../../api/fn';

import { CartMachineContext } from './context';
import { CartMachineEvent } from './events';

export const shopIdValid = (
  context: CartMachineContext,
  event?: CartMachineEvent
) => {
  const currentShopId = context.shopId;
  if (!event || event.type !== 'SET_SHOP') {
    if (!currentShopId) return false;
    return currentShopId.length > 0;
  }

  if (currentShopId && currentShopId !== event.shopId) {
    return false;
  }

  return true;
};

export const checkoutValid = (
  _: CartMachineContext,
  event?: CartMachineEvent
) => {
  if (event?.type === 'LOAD_CHECKOUT') {
    return (
      isCheckout(event.checkout) &&
      isCart(event.cart) &&
      isCustomer(event.customer)
    );
  }
  return false;
};

export const orderValid = (_: CartMachineContext, event?: CartMachineEvent) => {
  if (event?.type === 'FINALIZE_CHECKOUT') {
    return isOrder(event.order);
  }
  return false;
};
