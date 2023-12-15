import Link from "next/link";

function Qlinks(props) {
	return (
		<Link
			href={props.link}
			className="text-3xl w-full"
		>
			{props.lname}
		</Link>
	);
}

export default Qlinks;
