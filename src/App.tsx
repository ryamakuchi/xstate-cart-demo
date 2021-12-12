import { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { cartMachine } from './lib/cart/state-machines/cart';
import {
  setShopEventCreator,
  setEmptyEventCreator,
  loadCheckoutEventCreator,
} from './lib/cart/state-machines/events';

import { Spinner } from '@chakra-ui/react';
import { Checkout } from './components/Checkout';
import { shopId, customer, cart, checkout } from './mock';

export const App = () => {
  const [state, send] = useMachine(cartMachine, { devTools: true });

  useEffect(() => {
    send(setShopEventCreator({ shopId }));

    if (!state.matches('initializing')) return;

    if (location.hash === '#empty') {
      send(setEmptyEventCreator());
      return;
    }

    send(
      loadCheckoutEventCreator({
        customer,
        cart,
        checkout,
      })
    );
  }, []);

  return (
    <div>
      {state.matches('initializing') && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {state.matches('empty') && <div>空です</div>}
      {state.matches('checkout') && <Checkout />}
    </div>
  );
};
