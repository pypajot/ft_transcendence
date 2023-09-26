import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Navbar.css';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<nav >
			<div className="nav-home">
				<li><a>
					<Link to='/profile'>
						PROFILE
					</Link>
				</a></li>
			</div>
			<div className="nav-home">
				<li><a>
					<Link to='/home'>
						HOME
					</Link>
				</a></li>
			</div>
			<div className="nav-home">
				<li><a>
					<Link to='/game'>
						GAME
					</Link>
				</a></li>
			</div>
			<div className="nav-home">
				<li><a>
					<Link to='/friends'>
						FRIENDS
					</Link>
				</a></li>
			</div>
			<div className="nav-home">
				<li><a>
					<Link to='/chatapp'>
						CHAT
					</Link>
				</a></li>
			</div>
			<div className="logout-button">
				<button className="button" onClick={logout}>
					Logout
				</button>
			</div>
		</nav>
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