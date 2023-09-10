import { LogoutButton } from "./LogoutButton";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/core";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<InPageNavigation aria-label="get started">
		<Link to='/home'>
			<InPageNavigationItem href="">
				Home
			</InPageNavigationItem>
		</Link>
		<Link to='/profile'>
			<InPageNavigationItem href="">
				Profile
			</InPageNavigationItem>
		</Link>
		<Link to='/game'>
			<InPageNavigationItem href="">
				Game
			</InPageNavigationItem>
		</Link>
		<Link to='/chat'>
			<InPageNavigationItem href="">
				Chat
			</InPageNavigationItem>
		</Link>
		<LogoutButton />
		</InPageNavigation>
	);
};

export const Navbar2 = () => {
	return (
		<div>
		<Link to='/home'>
			<button>
				Home
			</button>
		</Link>
		<Link to='/profile'>
			<button>
				Profile
			</button>
		</Link>
		</div>
	)
}


export default Navbar;