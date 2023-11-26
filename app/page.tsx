import Image from "next/image";
import pragyatha_logo from "@/public/pragyatha.png";
import Navbar from "@/components/navbar";
import { TypingAnimationText } from "@/components/animate-text";
import Timer from "@/components/timer/timer";

export default function Home() {
	return (
		<div
			className={
				"bg-[url('../public/bg1.jpg')] top-0 right-0 left-0 -z-10 absolute"
			}
		>
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
					className="text-2xl md:text-4xl text-[#BE277E] transition-all hover:underline hover:text-white hover:cursor-pointer"
				>
					<p className="text-xl text-justify my-4">
						Pragyatha 2k23, a state-level entrepreneurial fest where technology
						and entrepreneurship blend. This platform is designed for engineers,
						innovators, and start-ups to realize their potential and ambition.
					</p>
				</TypingAnimationText>
			</div>
		</div>
	);
}
