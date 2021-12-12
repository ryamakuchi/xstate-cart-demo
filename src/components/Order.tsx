import { State, Interpreter, StateSchema } from 'xstate';
import { Text, Flex, Button } from '@chakra-ui/react';

import { paymentMethodList } from '../mock';

import { CartMachineContext } from '../lib/cart/state-machines/context';
import { CartMachineEvent } from '../lib/cart/state-machines/events';

import { ShopName } from './ShopName';
import { Title } from './Title';
import { ItemBox } from './ItemBox';
import { Detail } from './Detail';

type Props = {
  state: State<CartMachineContext, CartMachineEvent>;
  send: Interpreter<CartMachineContext, StateSchema, CartMachineEvent>['send'];
};

export const Order = ({ state, send }: Props) => {
  // エラーハンドリングは実装していないため適当に null を返している
  if (!state.context.order) return null;
  return (
    <>
      <ShopName shopId={state.context.shopId} />

      <Title>購入ありがとうございます！</Title>

      <ItemBox item={state.context.order.item} state={state} send={send} />

      <Detail
        title="お支払い情報"
        text={
          paymentMethodList.find(
            (pm) => pm.type === state.context.order?.paymentMethod
          )?.name ?? ''
        }
      />
      <Detail title="お届け先住所" text={state.context.order.shippingAddress} />
      <Detail title="メールアドレス" text={state.context.order.email} />

      <Text>※ このカートはデモサイトです。実際には購入されていません。</Text>

      <Flex flexDirection="column" my="24px">
        <Button
          colorScheme="teal"
          size="lg"
          variant="link"
          mt="16px"
          onClick={() => location.reload()}
        >
          カートのフローをもう一度試してみる
        </Button>
      </Flex>
    </>
  );
};
