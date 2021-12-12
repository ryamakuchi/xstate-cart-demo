import { Item, Customer, Cart, Checkout } from '../lib/api/model';

export const shopId: string = 'shopId';

export const item: Item = {
  id: 'itemId',
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  price: 500,
  title: 'サンプル商品',
};

export const customer: Customer = {
  email: 'ryamakuchi@example.com',
  address: '〒106-6237 東京都港区六本木３丁目２−１ 六本木グランドタワー37F',
  payments: 'credit card',
};

export const cart: Cart = {
  id: 'cartId',
  item,
};

export const checkout: Checkout = {
  id: 'checkoutId',
  cartId: 'cartId',
  item,
  email: 'ryamakuchi@example.com',
  shippingAddress:
    '〒106-6237 東京都港区六本木３丁目２−１ 六本木グランドタワー37F',
  paymentMethod: 'credit card',
  isCompleted: false,
};
