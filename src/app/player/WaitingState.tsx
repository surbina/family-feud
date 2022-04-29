import { Box, Text } from '@chakra-ui/react';

export function WaitingState() {
  return (
    <Box marginTop={16}>
      <Text fontSize={24} color="blackAlpha.700" fontWeight={700}>
        Aguarda unos momentos, ya viene la próxima pregunta
      </Text>
    </Box>
  );
}
