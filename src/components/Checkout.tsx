import { useState } from 'react';
import { State, Interpreter, StateSchema } from 'xstate';

import { CartMachineContext } from '../lib/cart/state-machines/context';
import {
  CartMachineEvent,
  mutateCheckoutEventCreator,
  finalizeCheckoutEventCreator,
} from '../lib/cart/state-machines/events';

import { ShopName } from './ShopName';
import { Title } from './Title';
import { ItemBox } from './ItemBox';
import { CheckoutInput } from './CheckoutInput';
import { CheckoutConfirm } from './CheckoutConfirm';

type Props = {
  state: State<CartMachineContext, CartMachineEvent>;
  send: Interpreter<CartMachineContext, StateSchema, CartMachineEvent>['send'];
};

export const Checkout = ({ state, send }: Props) => {
  // エラーハンドリングは実装していないため適当に null を返している
  if (
    !state.context.cart?.item ||
    !state.context.customer ||
    !state.context.checkout
  )
    return null;

  const [isInput, setIsInput] = useState(true);

  return (
    <>
      <ShopName shopId={state.context.shopId} />

      <Title>{isInput ? '購入情報を入力' : '入力した内容を確認'}</Title>

      <ItemBox item={state.context.cart.item} state={state} send={send} />

      {isInput ? (
        <CheckoutInput
          customer={state.context.customer}
          checkout={state.context.checkout}
          onChange={(customer, checkout) => {
            send(
              mutateCheckoutEventCreator({
                checkout: {
                  ...checkout,
                  email: customer.email,
                  shippingAddress: customer.address,
                  paymentMethod: customer.paymentMethod,
                },
              })
            );
          }}
          onSubmit={() => setIsInput(false)}
        />
      ) : (
        <CheckoutConfirm
          checkout={state.context.checkout}
          item={state.context.cart.item}
          backToInput={() => setIsInput(true)}
          onSubmit={(checkout, item) =>
            send(
              finalizeCheckoutEventCreator({
                checkout: checkout,
                order: {
                  id: 'orderId',
                  item,
                  email: checkout.email,
                  shippingAddress: checkout.shippingAddress,
                  paymentMethod: checkout.paymentMethod,
                  isCompleted: false,
                },
              })
            )
          }
        />
      )}
    </>
  );
};
