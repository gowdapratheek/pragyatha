function Social(props) {
	return (
		<a
			href={props.sociLink}
			className="text-3xl w-full"
		>
			{props.sociName}
		</a>
	);
}

export default Social;
