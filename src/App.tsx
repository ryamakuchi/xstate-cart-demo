import { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { cartMachine } from './lib/cart/state-machines/cart';
import {
  setShopEventCreator,
  loadCheckoutEventCreator,
} from './lib/cart/state-machines/events';

import { Container } from '@chakra-ui/react';

import { Loading } from './components/Loading';
import { Empty } from './components/Empty';
import { Checkout } from './components/Checkout';
import { Order } from './components/Order';

import { shopId, customer, cart, checkout } from './mock';

export const App = () => {
  const [state, send] = useMachine(cartMachine, { devTools: true });

  useEffect(() => {
    send(setShopEventCreator({ shopId }));

    if (!state.matches('initializing')) return;

    send(
      loadCheckoutEventCreator({
        customer,
        cart,
        checkout,
      })
    );
  }, []);

  return (
    <Container maxW="container.sm">
      {state.matches('initializing') && <Loading />}
      {state.matches('empty') && <Empty />}
      {state.matches('checkout') && <Checkout state={state} send={send} />}
      {state.matches('orderCompleted') && <Order state={state} send={send} />}
    </Container>
  );
};
