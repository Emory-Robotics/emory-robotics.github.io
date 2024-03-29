import { useState } from "react";

enum SponsorLevel {
	Champion = "max-w-xl w-xl max-h-96 h-96",
	Eagle = "max-w-lg w-lg max-h-80 h-80",
	Gold = "max-w-md w-md max-h-72 h-72",
	Blue = "max-w-sm w-sm max-h-64 h-64",
	Supporter = "max-w-xs w-xs max-h-60 h-60"
}

function Sponsor(props: { s: SponsorI }): JSX.Element {

	return (
		<div>
			<div className={`${props.s.level.toString()} flex justify-center flex-col p-5 box-border space-y-2`}>
				<img alt={props.s.name} src={props.s.picture} style={{ objectFit: "cover" }} />
			</div>
			<text className="text text-lg border-t-2">{props.s.name}</text>
		</div>

	);
}

function SponsorSection(props: { name: string, sponsors: SponsorI[], setShowModal: any }): JSX.Element {
	return (
		<div className="m-1">
			<text className="text-xl">{props.name}</text>
			<hr className="mb-2 w-11/12" />
			<div className="flex flex-row gap-8">
				{props.sponsors.length === 0 &&
					<div className="flex justify-center">
						<span className="text-gray-500 hover:underline text-sm" onClick={() => props.setShowModal(true)}>Become an Emory Robotics Sponsor</span>
					</div>
				}
				{props.sponsors.map((s: SponsorI, idx: number) => {
					return (
						<Sponsor s={s} key={`${props.name}-${idx}`} />
					);
				})}
			</div>
		</div>
	);
}

interface SponsorI {
	name: string,
	picture: string,
	level: SponsorLevel
}

export default function Sponsors(): JSX.Element {

	const champion: SponsorI[] = [
		{
			name: "Emory Student Government Association",
			level: SponsorLevel.Champion,
			picture: "https://se-images.campuslabs.com/clink/images/efa5a82a-37d5-4653-ade5-0d88dab10b9e0c366924-6fb4-4369-9308-7e251dd73bcb.png?preset=med-sq",
		},
		{
			name: "Emory College Council",
			level: SponsorLevel.Champion,
			picture: "https://se-images.campuslabs.com/clink/images/bc3945b7-4464-4609-a066-1e953c676d5ae50963fd-1980-4776-97a7-2f7b0695be32.png?preset=med-sq",
		}
	];
	const eagle: SponsorI[] = [];
	const gold: SponsorI[] = [
		{
			name: "Emory Computer Science Department",
			level: SponsorLevel.Gold,
			picture: "https://imgs.search.brave.com/tt9SwKm5oVaOsJWigJLobBVw3XD54cTJx82UtCK1_Hk/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9jcmEu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy9q/b2ItbWFuYWdlci11/cGxvYWRzL2NvbXBh/bnlfbG9nby8yMDE4/LzEwL2Vtb3J5LWZh/Y2Vib29rLTIwMHgy/MDAuanBn",
		}
	];
	const blue: SponsorI[] = [];
	const supporter: SponsorI[] = [];

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="w-full h-full">
			<div className={`w-full h-full flex justify-start m-5 flex-col ${showModal ? "blur-sm" : ""}`}>
				<SponsorSection name="Champion" sponsors={champion} setShowModal={setShowModal} />
				<SponsorSection name="Eagle" sponsors={eagle} setShowModal={setShowModal} />
				<SponsorSection name="Gold" sponsors={gold} setShowModal={setShowModal} />
				<SponsorSection name="Blue" sponsors={blue} setShowModal={setShowModal} />
				<SponsorSection name="Supporter" sponsors={supporter} setShowModal={setShowModal} />

			</div>
			<div className={`${showModal ? "translate-y-1/3" : "-translate-y-full"} w-2/3 h-1/2 fixed inset-0 bg-white  translate-x-1/3 drop-shadow-lg p-5 flex flex-col transition-all ease-in-out duration-200`}>
				<div className="w-full flex flex-row justify-between">
					<h1 className="text-lg">Sponsoring Emory Robotics</h1>
					<button className="hover:bg-gray-100 rounded-full" onClick={() => setShowModal(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="p-5 overflow-scroll">
					<p>
						Contact us at <a href="mailto:robotics.emory@gmail.com" className="underline text-[#07478D]">robotics.emory@gmail.com</a> to learn more about how you can support us!
					</p>
					<p>
						We thank you for your support!
					</p>
				</div>
			</div>
		</div>
	);
}
