import { createMachine, assign } from 'xstate';

import { CartMachineContext } from './context';
import { CartMachineEvent } from './events';
import { setShop, loadCheckout, mutateCheckout, setOrder } from './actions';

import { shopIdValid, checkoutValid, orderValid } from './guards';

export const defaultContext: CartMachineContext = {
  shopId: '',
  customer: null,
  cart: null,
  checkout: null,
  order: null,
};

export const cartMachine = createMachine<CartMachineContext, CartMachineEvent>(
  {
    id: 'cart',
    initial: 'initializing',
    context: defaultContext,
    states: {
      initializing: {
        meta: {
          label: 'cart に関する処理を開始',
        },
        on: {
          LOAD_CHECKOUT: {
            target: 'checkout',
            actions: ['loadCheckout'],
            cond: 'checkoutValid',
          },
        },
      },
      checkout: {
        meta: {
          label: 'リソースの編集・確認・更新中',
        },
        initial: 'editing',
        states: {
          editing: {
            meta: {
              label: 'リソース編集中',
            },
            on: {
              SET_EMPTY: {
                target: '#cart.empty',
              },
              MUTATE_CHECKOUT: [
                {
                  actions: ['mutateCheckout'],
                },
              ],
              FINALIZE_CHECKOUT: {
                target: 'finalizing',
                actions: ['setOrder'],
                cond: 'orderValid',
              },
            },
          },
          finalizing: {
            meta: {
              label: '注文完了後の後始末中',
            },
            invoke: {
              id: 'finalizeCheckout',
              src: 'finalizeCheckout',
              onDone: {
                target: 'completed',
                actions: assign((context) => {
                  return {
                    ...context,
                    customer: null,
                    cart: null,
                    checkout: null,
                  };
                }),
              },
              onError: 'completed', // 成功しても失敗しても注文完了なので状態は移行させる
            },
          },
          completed: {
            meta: {
              label: '注文および後始末完了',
            },
            always: {
              target: '#cart.orderCompleted',
            },
          },
        },
      },
      empty: {
        meta: {
          label: 'カートに何も存在しない状態',
        },
      },
      orderCompleted: {
        meta: {
          label: '注文完了で order リソースを表示',
        },
      },
    },
    on: {
      SET_SHOP: {
        actions: ['setShop'],
        cond: 'shopIdValid',
      },
    },
  },
  {
    actions: {
      setShop,
      loadCheckout,
      mutateCheckout,
      setOrder,
    },
    guards: {
      shopIdValid,
      checkoutValid,
      orderValid,
    },
    services: {
      finalizeCheckout: async () => {
        // 後始末的なコードのかわり
        await setTimeout(() => console.log('購入完了！'), 1000);
      },
    },
  }
);
