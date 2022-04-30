import { Box, Text } from '@chakra-ui/react';

export function WaitingState() {
  return (
    <Box marginTop={16}>
      <Text
        fontSize={32}
        color="blackAlpha.700"
        fontWeight={700}
        textAlign="center">
        Aguarda unos momentos,
      </Text>
      <Text
        fontSize={32}
        color="blackAlpha.700"
        fontWeight={700}
        textAlign="center">
        Ya viene la próxima pregunta
      </Text>
    </Box>
  );
}
