import Number from "./components/Number";
import Qlinks from "./components/Qlinks";
import Social from "./components/Social";
import Navbar from "@/components/navbar";
function App() {
	return (
		<>
			<Navbar />
			<div className="mx-8">
				<header>
					<h1 className="text-7xl text-center md:text-left md:text-9xl border-[2px] border-dashed">
						Contact Us
					</h1>
				</header>

				<Number
					number="7019726877"
					name="Fahad:"
				/>
				<Number
					number="9964663391"
					name="Pratheeka:"
				/>

				<h1 className="text-5xl text-[#BE277E] mt-8 mb-4">Quick links</h1>

				<div className="flex flex-col md:flex-row w-full">
					<Qlinks
						link="http://www.meriise.org/"
						lname="Meriise.org"
					/>
					<Qlinks
						link="https://www.mcehassan.ac.in/"
						lname="Malnad College of Engineering"
					/>
					<Qlinks
						link="http://www.meriise.org/pragyatha23.html"
						lname="Events"
					/>
					<Qlinks
						link=""
						lname="Rulebook"
					/>
					<Qlinks
						link="http://www.meriise.org/team.html"
						lname="Team"
					/>
				</div>
				<h1 className="text-5xl text-[#BE277E] mt-8 mb-4">Stay in touch</h1>

				<div className="flex flex-col md:flex-row w-full">
					<Social
						sociLink="https://www.instagram.com/me_riise/"
						sociName="Instagram"
					/>
					<Social
						sociLink="https://in.linkedin.com/company/meriisefoundation"
						sociName="Facebook"
					/>
					<Social
						sociLink="https://www.youtube.com/@me-riise1750"
						sociName="Youtube"
					/>
				</div>
			</div>
		</>
	);
}

export default App;
