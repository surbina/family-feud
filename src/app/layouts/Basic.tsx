import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <Flex height="100vh" background="purple.400" color="white">
      {children}
    </Flex>
  );
}
