import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/core";
import { Link } from "react-router-dom";
import { Button } from "@twilio-paste/core/button";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
	const { logout } = useAuth();

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
		<Link to='/friends'>
			<InPageNavigationItem href="">
				Friends
			</InPageNavigationItem>
		</Link>
		<Link to='/game'>
			<InPageNavigationItem href="">
				Game
			</InPageNavigationItem>
		</Link>
		<Link to='/chatapp'>
			<InPageNavigationItem href="">
				Chat
			</InPageNavigationItem>
		</Link>
		<Button variant="primary" onClick={logout}>
				Logout
		</Button>
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