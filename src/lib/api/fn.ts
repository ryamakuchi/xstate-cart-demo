import { Cart, Checkout, Customer, Order } from './model';

export function isCheckout(arg: any): arg is Checkout {
  return typeof arg.id === 'string' && arg.id.length > 0;
}

export function isCart(arg: any): arg is Cart {
  return typeof arg.id === 'string' && arg.id.length > 0;
}

export function isCustomer(arg: any): arg is Customer {
  return typeof arg.token === 'string' && arg.token.length > 0;
}

export function isOrder(arg: any): arg is Order {
  return typeof arg.id === 'string' && arg.id.length > 0;
}
