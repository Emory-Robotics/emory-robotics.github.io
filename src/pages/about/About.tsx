import { useState } from "react";

function Engineering(props: any): JSX.Element {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="flex flex-col items-center">

			<div onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)}>
				<div className="relative w-32 h-32 overflow-hidden">
					<div className={`${hidden ? "-translate-y-full" : "translate-y-0"} transition transition-all ease-in-out duration-200 absolute`}>
						<svg {...props}>
							<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
						</svg>
						<div className={`${hidden ? "translate-y-1/2" : "translate-y-[10rem]"} absolute transition transition-all ease-in-out duration-200 flex text-center justify-center items-center`}>
							<text>Design, model, and create robots from scratch</text>
						</div>
					</div>
				</div>

			</div>
			<text className="text-center">Mechanical Engineering</text>
		</div>
	);
}

function ComputerScience(props: any): JSX.Element {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="flex flex-col items-center">

			<div onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)}>

				<div className="relative w-32 h-32 overflow-hidden">
					<div className={`${hidden ? "-translate-y-full" : "translate-y-0"} transition transition-all ease-in-out duration-200 absolute`}>
						<svg {...props}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
						</svg>
						<div className={`${hidden ? "translate-y-1/2" : "translate-y-[10rem]"} absolute transition transition-all ease-in-out duration-200 flex text-center justify-center items-center`}>
							<text>Program robots & data science analysis</text>
						</div>
					</div>
				</div>

			</div>
			<text className="text-center">Computer Science</text>
		</div>
	);
}

function ElectricalEngineering(props: any): JSX.Element {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="flex flex-col items-center">

			<div onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)}>
				<div className="relative w-32 h-32 overflow-hidden">
					<div className={`${hidden ? "-translate-y-full" : "translate-y-0"} transition transition-all ease-in-out duration-200 absolute`}>
						<svg {...props}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
						</svg>
						<div className={`${hidden ? "translate-y-1/2" : "translate-y-[10rem]"} absolute transition transition-all ease-in-out duration-200 flex text-center justify-center items-center`}>
							<text>Wire robots from scratch</text>
						</div>
					</div>
				</div>
			</div>
			<text className="text-center">Electrical Engineering</text>
		</div>
	);
}

function Marketing(props: any): JSX.Element {

	const [hidden, setHidden] = useState(false);

	return (
		<div className="flex flex-col items-center">

			<div onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)} className="w-32 h-32">
				<div className="relative w-32 h-32 overflow-hidden">
					<div className={`${hidden ? "-translate-y-full" : "translate-y-0"} transition transition-all ease-in-out duration-200 absolute`}>
						<svg {...props}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
						</svg>
					</div>
					<div className={`${hidden ? "translate-y-1/2" : "translate-y-[10rem]"} absolute transition transition-all ease-in-out duration-200 flex text-center justify-center items-center`}>
						<text>Develop marketing and business models</text>
					</div>
				</div>
			</div>
			<text className="text-center">Marketing</text>
		</div>
	);
}

export default function About(): JSX.Element {
	const props = {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none", viewBox: "0 0 24 24",
		strokeWidth: "1.5",
		stroke: "currentColor",
		className: "w-32 h-32 stroke-[#07478D]"
	}

	return (
		<div className="px-10 mt-10 pb-5 box-border mx-0 divide-y space-y-7">
			<div className="flex flex-col">
				<text className="text text-2xl text-w-bold w-4/5 my-2">Our Mission</text>
				<text className="text text-md w-4/5">
					Emory Robotics Club works to connect students to a wide variety of careers including Engineering,
					Computer Science, Business, Marketing, and Management. In addition to providing hands-on robotics projects
					for students of all majors, the Emory Robotics Club works to connect students with FIRST Robotics Teams
					and Organizations to gain real-world experience in the field they choose.
				</text>
			</div>

			<div className="">
				<text className="text text-2xl text-w-bold w-4/5 my-2">How to Get Involved</text>
				<div className="flex justify-center mt-10">
					<div className="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-0 sm:gap-x-32">
						<Engineering {...props} />
						<ComputerScience {...props} />
						<ElectricalEngineering {...props} />
						<Marketing {...props} />
					</div>
				</div>

				<div className="my-5 flex flex-col justify-center items-center space-y-4">
					<div className="border-y-2 w-fit border-[#f9aa12]">
						<text className="text-slate-600">and more...</text>
					</div>
					<a
						target="_blank"
						className="px-6 py-3 text-[#3279d0] no-underline bg-white rounded hover:bg-blue-700 hover:underline hover:text-white border-2 border-[#3279d0]"
						href="https://docs.google.com/forms/d/e/1FAIpQLSfD3ExCFY45tcjreeLHKbYYa00kFnR3dn45jy_9V-8VMF6TKw/viewform">

						<button>Join Emory Robotics</button>
					</a>
				</div>
			</div>
		</div>
	);
}
