import { State, Interpreter, StateSchema } from 'xstate';

import { CartMachineContext } from '../lib/cart/state-machines/context';
import {
  CartMachineEvent,
  setEmptyEventCreator,
} from '../lib/cart/state-machines/events';

import { Item } from '../lib/api/model/item';
import { Text, Box, Image, Button } from '@chakra-ui/react';

type Props = {
  item: Item | null;
  state: State<CartMachineContext, CartMachineEvent>;
  send: Interpreter<CartMachineContext, StateSchema, CartMachineEvent>['send'];
};

export const ItemBox = ({ item, state, send }: Props) =>
  item && (
    <Box
      id={item.id}
      borderWidth="1px"
      borderRadius="lg"
      p="16px"
      display="flex"
      justifyContent="space-between"
    >
      <Image w="50%" maxW="150px" src={item.imageUrl} alt={item.title} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        w="calc(50% - 16px)"
        ml="16px"
      >
        <Text fontSize="2xl">{item.title}</Text>
        <Text fontSize="xl" fontWeight="bold">
          {item.price}円
        </Text>

        {!state.matches('orderCompleted') && (
          <Button
            colorScheme="red"
            variant="outline"
            onClick={() => {
              send(setEmptyEventCreator());
            }}
          >
            商品を削除
          </Button>
        )}
      </Box>
    </Box>
  );
