import { useState } from "react";

interface CarouselImage {
	src: string,
	alt: string
}

function Carousel(props: { images: CarouselImage[] }): JSX.Element {
	const [current, setCurrent] = useState(0);
	return (
		<div className="w-full h-full overflow-hidden relative">
			<div className="absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-10 space-x-2">
				{props.images.map((_, idx) => {
					return (
						<svg onClick={() => { setCurrent(idx) }}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24" strokeWidth={5}
							stroke="currentColor"
							className={`${current === idx ? "stroke-white" : "stroke-slate-600"} w-6 h-6 `}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5" />
						</svg>
					);
				})}
			</div>
			<div className="relative w-full h-full">
				{props.images.map((img, idx) => {
					return (
						<div className={`${idx === current ? "translate-x-0" : "translate-x-full"} absolute w-full h-full z-0 transition transition-all ease-in-out duration-200`} key={idx}>
							<img
								src={img.src}
								className="block w-full h-full object-cover"
								alt={img.alt}
								style={{
									position: "absolute",
									top: "-9999px",
									bottom: "-9999px",
									left: "-9999px",
									right: "-9999px",
									margin: "auto"
								}}
							/>
						</div>

					);
				})}
			</div>
			{props.images.length > 1 && <div className="w-full absolute bottom-1/3 z-20 flex flex-row justify-between">
				<button
					className=""
					type="button"
					onClick={() => setCurrent(current - 1 < 0 ? props.images.length - 1 : current - 1)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-slate-600">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
				<button
					className=""
					type="button"
					onClick={() => setCurrent(current + 1 === props.images.length ? 0 : current + 1)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-slate-600">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>}
		</div >
	);
}

interface EventI {
	title: string,
	date: Date,
	description: string,
	images: CarouselImage[]
	slides?: string,
	video?: string
}

function Event(event: EventI): JSX.Element {
	return (
		<div className="self-center justify-self-center flex flex-col rounded w-72 h-96 divide-y drop-shadow-lg">
			<div className="w-full h-1/2">
				<Carousel images={event.images} />
			</div>
			<div className="w-full h-1/2 p-2 flex flex-col">
				<div className="flex flex-row justify-between items-end">
					<text className="text-lg">{event.title}</text>
					<text className="text-md">{`${event.date.getMonth() + 1}/${event.date.getDate()}/${event.date.getFullYear().toString().slice(-2)}`}</text>
				</div>
				<div className="h-full flex flex-col justify-between">
					<text className="text-sm">{event.description}</text>
					<div className="flex flex-row space-x-2 my-2">
						{event.slides ?
							<a
								rel="noreferrer"
								href={event.slides}
								target="_blank"
								className={`bg-yellow-400 cursor-pointer hover:bg-yellow-300 transition duration-300 ease px-4 py-2 rounded-full text-white text-sm flex align-center w-max`}>
								Slides
							</a> :
							<span
								className={`bg-yellow-400 opacity-60 cursor-default px-4 py-2 rounded-full text-white text-sm flex align-center w-max`}>
								Slides
							</span>}
						{event.video ?
							<a
								rel="noreferrer"
								href={event.video}
								target="_blank"
								className={`bg-red-400 cursor-pointer hover:bg-red-300 transition duration-300 ease px-4 py-2 rounded-full text-white text-sm flex align-center w-max`}>
								Video
							</a> :
							<span
								className={`bg-red-400 opacity-60 cursor-default px-4 py-2 rounded-full text-white text-sm flex align-center w-max`}>
								Video
							</span>}


					</div>
				</div>
			</div>
		</div >
	);
}

export default function Events(): JSX.Element {

	const events: EventI[] = [
		{
			title: "Swoop Race",
			date: new Date("December 4, 2021"),
			description: "Students built cars using an Arduino kit to race on a custom track using satallite imagery of Emory University's campus.",
			images: [
				{
					src: "assets/swoop-race/swoop-race.jpg",
					alt: "Arduino kit",
				},
				{
					src: "assets/swoop-race/swoop-race-2.jpeg",
					alt: "",
				},
				{
					src: "assets/swoop-race/swoop-race-3.jpg",
					alt: "",
				}]
		},
		{
			title: "Sensor Workshop",
			date: new Date("11/11/21"),
			description: "Workshop Introduction to Arduino Sensors - workshop series for Swoop Race training where students learned the basics of sensors.",
			slides: "https://docs.google.com/presentation/d/1T4Babe8RdO6PbY2pjTcmTvADmQLgftfn/edit?usp=share_link&ouid=113335070975547059087&rtpof=true&sd=true",
			video: "https://www.youtube.com/watch?v=YDJjPUMZS5U",
			images: [
				{
					src: "assets/11.11.21/sensor-workshop.jpg",
					alt: "Workshop Video Thumbnail"
				}
			]
		},
		{
			title: "Programming Workshop",
			date: new Date("11/18/21"),
			description: "Workshop Introduction to Arduino Programming - workshop series for Swoop Race training where students learned the basics of arduino programming.",
			video: "https://www.youtube.com/watch?v=Djtar6LRp7E",
			images: [
				{
					src: "assets/11.18.21/programming-workshop.jpg",
					alt: "Workshop Video Thumbnail"
				}
			]
		},
		{
			title: "PID Workshop",
			date: new Date("10/30/22"),
			description: "Workshop Introduction to PID Control - students learned how PID Control is implemented in elevators to keep us safe.",
			slides: "https://docs.google.com/presentation/d/1DWSMuy0VhVWWPjhw-J53lfKMpmzAVTEx6k6goOS5Hts/edit?usp=sharing",
			images: [
				{
					src: "assets/10.30.22/pid-flyer.png",
					alt: "Workshop Flyer"
				}
			]
		},
		{
			title: "Motor Workshop",
			date: new Date("11/4/21"),
			description: "Workshop Introduction to Motors - students learned how to use motors with Arduino including wiring and programming.",
			slides: "https://docs.google.com/presentation/d/1jmVxgtjnt65SyFQiYqsOpDaNv73ogw3I/edit?usp=share_link&ouid=113335070975547059087&rtpof=true&sd=true",
			video: "https://www.youtube.com/watch?v=j8n2ruJG0OE",
			images: [
				{
					src: "assets/11.4.21/motor-workshop.jpg",
					alt: "Workshop Video Thumbnail"
				}
			]
		},
		{
			title: "Intro to Arduino",
			date: new Date("9/7/21"),
			description: "Workshop Introduction to Arduinos - students learned how to use arduinos to interact with sensors and electronics through wiring and programming.",
			slides: "https://docs.google.com/presentation/d/1iEVy597eIYZK-t0F8k9gLB47739Qty1Qgnd0B6r4x04/edit?usp=sharing",
			images: [
				{
					src: "assets/9.7.21/intro-arduino-flyer.png",
					alt: "Workshop Flyer"
				}
			]
		},
		{
			title: "Custom LED's Workshop",
			date: new Date("12/9/2022"),
			description: "Custom LED's Workshop - students learned how to use arduinos to interact with LED's through wiring and programming to create custom designs/animations.",
			slides: "https://docs.google.com/presentation/d/1bi8a_eflZyoYb1ITKGEyhE6pvjTAlJOUPfuydBoovLk/edit?usp=sharing",
			images: [
				{
					src: "assets/12.6.22/flyer.png",
					alt: "Workshop Flyer"
				},
				{
					src: "assets/12.6.22/LED1.jpg",
					alt: "Workshop event"
				},
				{
					src: "assets/12.6.22/LED2.jpg",
					alt: "Workshop event"
				},
				{
					src: "assets/12.6.22/LED3.jpg",
					alt: "Workshop event"
				},
				{
					src: "assets/12.6.22/LED4.jpg",
					alt: "Workshop event"
				},
				{
					src: "assets/12.6.22/LED5.jpg",
					alt: "Workshop event"
				},
				{
					src: "assets/12.6.22/LED6.jpg",
					alt: "Workshop event"
				},
			]
		},
		{
			title: "Humaniod Robotics Challenge",
			date: new Date("1/20/2023"),
			description: "Built a robotic dog, Hades, from scratch following a tutorial for the Humaniod Robotics Challenge hosted by Georgia Tech.",
			slides: "https://docs.google.com/presentation/d/1bi8a_eflZyoYb1ITKGEyhE6pvjTAlJOUPfuydBoovLk/edit?usp=sharing",
			images: [
				{
					src: "assets/1.20.23/1.png",
					alt: "Hades robotic dog"
				},
				{
					src: "assets/1.20.23/2.png",
					alt: "Hades robotic dog"
				},
				{
					src: "assets/1.20.23/3.png",
					alt: "Hades robotic dog"
				},
			]
		},
	]

	return (
		<div className="w-11/12 my-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10">
			{events.sort((a, b) => b.date.getTime() - a.date.getTime()).map((event: EventI, idx: number) => <Event {...event} key={idx} />)}
		</div>
	);
}
