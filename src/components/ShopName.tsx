import { Text } from '@chakra-ui/react';
import { shopName } from '../mock';

type Props = {
  shopId: string;
};

export const ShopName = ({ shopId }: Props) => (
  <Text fontSize="6xl" align="center" lineHeight="1" my="24px">
    {shopName(shopId)}
  </Text>
);
