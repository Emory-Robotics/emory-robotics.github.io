export default function Consititution(): JSX.Element {
	return (
		<div className="my-5 w-full h-full">
			<p>Click <a href="assets/constitution.pdf" className="underline text-[#07478D]">here</a> if you are unable to view the PDF</p>
			<iframe title="Emory Robotics Consititution" src="assets/constitution.pdf" className="w-full h-full"></iframe>
			<div className="h-2"/>
		</div>
	);
}
