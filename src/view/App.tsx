import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Browser } from "./router/browser";
import { ThemeProvider } from "@/app/contexts/theme-provider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY, // Always stale
			refetchInterval: 1000 * 60 * 45, // 45 minutes
			retry: false,
			refetchOnWindowFocus: false,
			gcTime: 1000 * 60 * 60 * 1, // 1 hours
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Browser />
				</ThemeProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
