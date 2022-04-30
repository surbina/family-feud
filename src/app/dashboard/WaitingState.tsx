import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import qrPic from '../../../public/qr.png';

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
      <Image src={qrPic} alt="https://www.100cristianosdicen.com" />
    </>
  );
}
