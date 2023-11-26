type TimeProps = {
	timeNum: string | number;
	timeName: string;
};

function Time({ timeNum, timeName }: TimeProps) {
	return (
		<div>
			<h1>{timeNum}</h1>
			<p>{timeName}</p>
		</div>
	);
}
export default Time;
