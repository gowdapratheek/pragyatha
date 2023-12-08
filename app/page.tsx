"use client";

import Image from "next/image";
import pragyatha_logo from "@/public/pragyatha.png";
import Navbar from "@/components/navbar";
import { TypingAnimationText } from "@/components/animate-text";
import { events } from "@/lib/events";
import Timer from "@/components/timer/timer";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div
				className={`flex flex-col md:flex-row md:justify-around items-center justify-center h-[75vh]`}
			>
				<header>
					<TypingAnimationText
						className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						text={"ME-RIISE "}
					>
						<span className="text-black dark:text-white">presents</span>
					</TypingAnimationText>
					<div className="text-5xl font-semibold md:text-6xl lg:text-9xl ">
						<TypingAnimationText text={"Pragyatha"}>
							<span className="text-transparent font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]">
								2k23
							</span>
							<div className="md:text-3xl md:text-right pt-4 font-thin text-center text-xl">
								proclaim your potential
							</div>
						</TypingAnimationText>
					</div>
				</header>
				<Image
					src={pragyatha_logo}
					alt="Pragyatha logo"
					className="md:w-60 md:h-60 md:mt-0 w-24 h-24 mt-8"
				/>
			</div>
			<Timer />
			<div className="flex my-16 md:mx-16 mx-8">
				<TypingAnimationText
					text={"About"}
					className="text-4xl md:text-5xl text-[#BE277E] transition-all hover:underline hover:text-white hover:cursor-pointer"
				>
					<p className="text-xl text-justify my-4">
						Pragyatha 2k23, a state-level entrepreneurial fest where technology
						and entrepreneurship blend. This platform is designed for engineers,
						innovators, and start-ups to realize their potential and ambition.
					</p>
				</TypingAnimationText>
			</div>
			<div className="flex my-16 md:mx-16 mx-8">
				<TypingAnimationText
					text={"Schedule"}
					className="text-4xl md:text-5xl text-[#BE277E] transition-all hover:underline hover:text-white hover:cursor-pointer"
				>
					<div>
						{events.map((event) => (
							<div
								className="flex my-8 md:mx-16 mx-8"
								key={event.title}
							>
								<TypingAnimationText
									text={event.title}
									className="text-transparent text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
								>
									<p className="text-xl text-justify my-4 text-neutral-500">
										{event.date}, {event.time} Onwards
									</p>
								</TypingAnimationText>
							</div>
						))}
					</div>
				</TypingAnimationText>
			</div>
			<div className="flex my-16 md:mx-16 mx-8">
				<Link
					href={
						"https://cloud.appwrite.io/v1/storage/buckets/657355464bf7a225160c/files/657355946c535362ac51/view?project=6573553032bdf2af1fa2&mode=admin"
					}
					target="_blank"
					className="text-2xl text-[#BE277E] hover:text-neutral-400 transition-all delay-100"
					download={"rulebook.pdf"}
				>
					Download the Official Pragyatha Rulebook
				</Link>
			</div>
		</div>
	);
}
