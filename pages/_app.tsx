import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';
import 'src/styles/style.css';

const breakpoints = {
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1920px',
};
const theme = extendTheme({ breakpoints });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
