import Link from "next/link";

function Number(props) {
	return (
		<div className="mb-4">
			<h2 className="text-3xl text-[#BE277E] hover:text-neutral-400 transition-all delay-100 mt-8 mb-4">
				{props.name}
			</h2>
			<div className="mr-4">Phone:</div>
			<Link
				href={"tel:+91 " + props.number}
				className="font-mono text-4xl ml-4"
			>
				{props.number}
			</Link>
		</div>
	);
}

export default Number;
