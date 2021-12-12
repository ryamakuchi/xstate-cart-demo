import { Flex, Text, Button } from '@chakra-ui/react';

export const Empty = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Text align="center" fontSize="10vw">
        🛒
      </Text>
      <Text>
        ショッピングカートに
        <br />
        商品は入っていません
      </Text>

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
    </Flex>
  );
};
