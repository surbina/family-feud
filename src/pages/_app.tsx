import { ChakraProvider } from '@chakra-ui/react';
import { BasicLayout } from 'src/app/layouts/Basic';
import { theme } from 'src/theme';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ChakraProvider>
  );
}

export default MyApp;
