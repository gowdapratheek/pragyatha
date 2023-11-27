import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Chakra_Petch } from "next/font/google";

import "./globals.css";

const font = Chakra_Petch({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Pragyatha",
	description: "Flagship entrepreneurial event by ME-RIISE",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={font.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}

					{/* <div className="z-30 bottom-2 left-2 fixed">
						<ModeToggle />
					</div> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
