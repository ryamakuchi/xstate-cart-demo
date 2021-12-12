import { Customer, Cart, Checkout, Order } from '../../api/model/index';

// cart のステートが保持しているデータ
export interface CartMachineContext {
  shopId: string;
  customer: Customer | null;
  cart: Cart | null;
  checkout: Checkout | null;
  order: Order | null;
}
