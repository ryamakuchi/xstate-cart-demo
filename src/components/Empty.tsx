import { Center, Text } from '@chakra-ui/react';

export const Empty = () => {
  return (
    <Center h="100vh">
      <div>
        <Text align="center" fontSize="10vw">
          🛒
        </Text>
        <Text>
          ショッピングカートに
          <br />
          商品は入っていません
        </Text>
      </div>
    </Center>
  );
};
