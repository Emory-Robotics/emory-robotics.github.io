import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navlink(props: { name: string, url: string, className?: string }): JSX.Element {
	const navigate = useNavigate();
	let isActive = window.location.pathname.toString() === props.url;

	return (
		<span className={`text-sm sm:text-lg text-left link link-underline link-underline-black text-black ${isActive ? "link-underline-active" : ""} ${props.className}`} onClick={() => {
			navigate(props.url);
		}}>{props.name}</span>
	);
}


export default function Navbar(): JSX.Element {
	return (
		<nav className="bg-white w-full flex flex-row items-center justify-between border-b-2 p-2">
			<div className="hidden sm:block">
				<Navlink name="Emory Robotics Club" url="/" />
			</div>


			<div className="flex flex-row space-x-4">
				<Navlink name="ERC" url="/" className="sm:hidden" />
				<Navlink name="Sponsors" url="/sponsors" />
				<Navlink name="About" url="/about" />
				<Navlink name="Events" url="/events" />
				<Navlink name="Constitution" url="/constitution" />
			</div>
		</nav>
	);
}
