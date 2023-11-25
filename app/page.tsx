import { Chakra_Petch } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";

const font = Chakra_Petch({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
	return (
		<div>
			<header className={`${font.className} mt-40`}>
				<h1 className="text-9xl">Pragyatha{"'"}23</h1>
			</header>
			<ModeToggle />
		</div>
	);
}
