import EventContainer from "@/components/event-container";
import { events } from "@/lib/events";
const Page = () => {
	return (
		<div>
			<header>
				<h1 className="text-7xl text-center md:text-left md:text-9xl border-[2px] border-dashed">
					Events
				</h1>
			</header>
			{events.map((event, index) => (
				<EventContainer
					key={index}
					title={event.title}
					date={event.date}
					overview={event.overview}
					link={event.link}
					url={event.url}
					time={event.time}
				/>
			))}
		</div>
	);
};

export default Page;
