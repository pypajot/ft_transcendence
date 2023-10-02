import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Navbar.css';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<nav >
			<div className="nav-home">
				<li>
					<Link to='/profile'>
						PROFILE
					</Link>
				</li>
			</div>
			<div className="nav-home">
				<li>
					<Link to='/home'>
						HOME
					</Link>
				</li>
			</div>
			<div className="nav-home">
				<li>
					<Link to='/game'>
						GAME
					</Link>
				</li>
			</div>
			<div className="nav-home">
				<li>
					<Link to='/friends'>
						FRIENDS
					</Link>
				</li>
			</div>
			<div className="nav-home">
				<li>
					<Link to='/chatapp'>
						CHAT
					</Link>
				</li>
			</div>
			<div className="logout-button">
				<button className="button" onClick={logout}>
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Navbar;