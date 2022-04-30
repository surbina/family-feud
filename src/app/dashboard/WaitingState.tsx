import { Heading } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

export function WaitingState() {
  return (
    <>
      <Heading
        as="h2"
        color="blackAlpha.700"
        marginTop={8}
        marginBottom={8}
        fontSize={64}>
        Ya viene la próxima pregunta!
      </Heading>
      <QRCode value="https://www.100cristianosdicen.com" size={400} />
    </>
  );
}
