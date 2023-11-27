import Navbar from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navbar />
			<div className="m-8">{children}</div>
		</div>
	);
};

export default layout;
