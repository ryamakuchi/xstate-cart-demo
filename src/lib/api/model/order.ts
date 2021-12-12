import { Item } from './item';

export interface Order {
  id: string;
  item: Item;
  email: string;
  shippingAddress: string;
  paymentMethod: string;
  isCompleted: boolean;
}
