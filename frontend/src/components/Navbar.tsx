import { LogoutButton } from "./LogoutButton";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/core";

const Navbar = () => {
	return (
		<InPageNavigation aria-label="get started">
		<InPageNavigationItem href="/home">
			Home
		</InPageNavigationItem>
		<InPageNavigationItem href="/profile">
			Profile
		</InPageNavigationItem>
		<InPageNavigationItem href="/game">
			Game
		</InPageNavigationItem>
		<InPageNavigationItem href="/chat">
			Chat
		</InPageNavigationItem>
		<LogoutButton />
		</InPageNavigation>
	);
};

export default Navbar;