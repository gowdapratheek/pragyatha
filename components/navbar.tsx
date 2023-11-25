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
	{
		name: "Team",
		href: "/team",
	},
];

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="flex justify-end mt-4">
			<div className="flex">
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
