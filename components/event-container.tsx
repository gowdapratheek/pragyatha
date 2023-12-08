"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type EventContainerProps = {
	title: string;
	description?: string;
	date?: string;
	time?: string;
	url?: StaticImageData | string | undefined;
	link?: string;
};

const EventContainer = ({
	title,
	date,
	description,
	time,
	url,
	link,
}: EventContainerProps) => {
	return (
		<div className="mt-16 w-full flex flex-col md:flex-row gap-4 p-8 outline-double outline-[0.5px] outline-neutral-600">
			<Image
				src={url!}
				alt={"Skeleton"}
				height={450}
				width={450}
				className="w-80 h-52"
			/>

			<div>
				<h1 className="font-extrabold text-transparent text-3xl text-center md:text-left md:text-5xl bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
					{title}
				</h1>
				<div className="font-thin text-xl inline-block text-neutral-500">
					{date} {time}
				</div>
				<p className="py-4 text-justify text-neutral-400">{description}</p>
				<Link
					className="text-justify hover:text-amber-400"
					href={link! + `/${title}`}
				>
					Register here
				</Link>
			</div>
		</div>
	);
};

export default EventContainer;
