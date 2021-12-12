import { Box, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  text: string;
};

export const Detail = ({ title, text }: Props) => {
  return (
    <Box my="24px">
      <Text fontSize="md" fontWeight="bold" mb="8px">
        {title}
      </Text>
      <Text fontSize="md" p="8px" backgroundColor="gray.100" borderRadius="md">
        {text}
      </Text>
    </Box>
  );
};
