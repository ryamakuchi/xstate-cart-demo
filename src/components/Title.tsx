import { Text } from '@chakra-ui/react';

type Props = {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <Text
      align="center"
      p="16px"
      mb="24px"
      borderRadius="lg"
      backgroundColor="gray.100"
    >
      {children}
    </Text>
  );
};
