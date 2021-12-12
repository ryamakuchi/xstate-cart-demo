import { FormEvent, useState, useEffect } from 'react';

import { paymentMethodList } from '../mock';
import { Customer, Checkout } from '../lib/api/model';

import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  RadioGroup,
  Radio,
  Button,
} from '@chakra-ui/react';

type Props = {
  customer: Customer;
  checkout: Checkout;
  onChange: (customer: Customer, checkout: Checkout) => void;
  onSubmit: () => void;
};

export const CheckoutInput = ({
  customer,
  checkout,
  onChange,
  onSubmit,
}: Props) => {
  const [email, setEmail] = useState(customer.email);
  const [address, setAddress] = useState(customer.address);
  const [paymentMethod, setPaymentMethod] = useState(customer.paymentMethod);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    onChange({ email, address, paymentMethod }, checkout);
  }, [email, address, paymentMethod]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="email" mt="24px">
        <FormLabel fontWeight="bold">メールアドレス</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      <FormControl id="address" mt="24px">
        <FormLabel fontWeight="bold">お届け先住所</FormLabel>
        <Input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </FormControl>

      <FormControl id="paymentMethod" mt="24px">
        <FormLabel fontWeight="bold">お支払い方法</FormLabel>
        <RadioGroup
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event)}
        >
          <Flex direction="row" flexWrap="wrap">
            {paymentMethodList.map((pm) => (
              <Radio value={pm.type} ml="16px" key={pm.type}>
                {pm.name}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
      </FormControl>

      <Flex flexDirection="column" my="24px">
        <Button type="submit" colorScheme="teal" size="lg">
          入力内容の確認へ
        </Button>
      </Flex>
    </form>
  );
};
