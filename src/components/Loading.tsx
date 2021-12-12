import { Center, Spinner } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};
