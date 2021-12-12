import { Item, Customer, Cart, Checkout } from '../lib/api/model';

const shopList = [
  {
    id: 'shopId',
    name: 'example shop',
  },
] as const;

export const paymentMethodList = [
  {
    type: 'creditCard',
    name: 'クレジットカード',
  },
  {
    type: 'atobarai',
    name: '後払い',
  },
  {
    type: 'cvs',
    name: 'コンビニ決済',
  },
];

export const shopId: string = 'shopId';

export const shopName = (shopId: string): string | undefined => {
  return shopList.find((shop) => shop.id === shopId)?.name;
};

export const item: Item = {
  id: 'itemId',
  imageUrl: 'https://picsum.photos/seed/picsum/300/300',
  price: 500,
  title: 'サンプル商品',
};

export const customer: Customer = {
  email: 'ryamakuchi@example.com',
  address: '〒106-6237 東京都港区六本木3丁目2−1 六本木グランドタワー37F',
  paymentMethod: 'creditCard',
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
  paymentMethod: 'creditCard',
};
