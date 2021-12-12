import { Checkout, Item } from '../lib/api/model';
import { paymentMethodList } from '../mock';

import { Flex, Button } from '@chakra-ui/react';

import { Detail } from './Detail';

type Props = {
  checkout: Checkout;
  item: Item;
  backToInput: () => void;
  onSubmit: (checkout: Checkout, item: Item) => void;
};

export const CheckoutConfirm = ({
  checkout,
  item,
  backToInput,
  onSubmit,
}: Props) => {
  return (
    <>
      <Detail title="メールアドレス" text={checkout.email} />
      <Detail title="お届け先住所" text={checkout.shippingAddress} />
      <Detail
        title="お支払い方法"
        text={
          paymentMethodList.find((pm) => pm.type === checkout.paymentMethod)
            ?.name ?? ''
        }
      />

      <Flex flexDirection="column" my="24px">
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => onSubmit(checkout, item)}
        >
          購入を確定する
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          variant="link"
          mt="16px"
          onClick={backToInput}
        >
          入力画面へ戻る
        </Button>
      </Flex>
    </>
  );
};
