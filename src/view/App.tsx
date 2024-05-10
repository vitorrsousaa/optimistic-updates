import { ThemeProvider } from "@/contexts/theme-provider";
import { queryClient } from "@/libs/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Browser } from "./router/browser";
import { Toaster } from "./ui/sonner";

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Browser />

					<Toaster />
				</ThemeProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
