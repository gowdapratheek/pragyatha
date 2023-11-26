"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Events",
		href: "/events",
	},
	{
		name: "Gallery",
		href: "/gallery",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="w-full h-fit flex justify-center md:justify-end mt-4 sticky top-0 z-30 backdrop-blur-md">
			<div className="flex py-4">
				{links.map((link, index) => (
					<Link
						href={link.href}
						className={cn(
							"cursor-pointer mx-4 hover:text-[#BE277E] transition-all delay-100",
							pathname === link.href && "text-[#BE277E]"
						)}
						key={index}
					>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
