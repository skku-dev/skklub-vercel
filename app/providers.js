'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import getDesignTokens from '@/utils/getDesignTokens';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';
import { initialIsLoadingState, isDarkModeState } from '@/utils/atoms';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';

const Providers = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);
	const darkModeTheme = createTheme(getDesignTokens('dark'));
	const lightModeTheme = createTheme(getDesignTokens('light'));
	const setInitialIsLoading = useSetRecoilState(initialIsLoadingState);
	const [client] = useState(
		new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
	);

	useEffect(() => {
		const mode = window.localStorage.getItem('skklubMode');

		if (mode === 'light') {
			setIsDarkMode(false);
		}
		setInitialIsLoading(false);
	}, []);
	return (
		<ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
			<CssBaseline />

			<QueryClientProvider client={client}>
				{children}
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export default Providers;
