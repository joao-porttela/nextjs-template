import { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider";
import { ToggleProvider } from "@/providers/toggle-provider";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<ToggleProvider>
					{children}
				</ToggleProvider>
			</ThemeProvider>
		</>
	)
}