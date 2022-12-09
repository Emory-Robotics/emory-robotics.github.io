export default function Home(): JSX.Element {
	return (
		<div className="w-full h-full flex sm:flex-row flex-col sm:justify-evenly items-center">

			<div className="w-1/2 h-full flex items-center justify-center">
				<div className="flex items-center justify-center flex-col">
					<h1 className="w-full text-left">Inspiring Students.</h1>
					<h1 className="w-full text-left">Engaging Alumni.</h1>
					<h1 className="w-full text-left">Connecting Mentors.</h1>
				</div>
			</div>

			<div className="w-1/2 h-full flex items-start sm:items-center justify-center">
				<img src="assets/logo.png" alt="Emory Robotics Logo" className="h-2/5" />
			</div>
		</div>
	);
}
