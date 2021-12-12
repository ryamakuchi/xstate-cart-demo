import { Item } from './item';

export interface Checkout {
  id: string;
  cartId: string;
  item: Item;
  email: string;
  shippingAddress: string;
  paymentMethod: string;
  isCompleted: boolean;
}
