import Image from "next/image";
import pragyatha_logo from "@/public/pragyatha.png";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div
				className={`mt-40 ml-4 flex flex-col md:flex-row md:justify-around items-center justify-center`}
			>
				<h1 className="text-5xl md:text-6xl lg:text-9xl ">
					<div className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]">
						ME-RIISE{" "}
						<span className="text-black dark:text-white">presents</span>
					</div>
					Pragyatha
					<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]">
						{" "}
						2k23
					</span>
					<div className="md:text-3xl md:text-right pt-4 font-thin text-center text-xl">
						proclaim your potential
					</div>
				</h1>

				<Image
					src={pragyatha_logo}
					alt="Pragyatha logo"
					className="md:w-60 md:h-60 md:mt-0 w-32 h-32 mt-8"
				/>
			</div>
		</div>
	);
}
