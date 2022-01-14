import { Flex } from '@chakra-ui/react';

export default function Container({ children }) {
  return (
    <Flex flexDir="column" justifyContent="center" pt="2" pb="5">
      {children}
    </Flex>
  );
}
