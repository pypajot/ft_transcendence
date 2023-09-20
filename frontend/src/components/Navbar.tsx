import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Navbar.css';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<nav>
			<li>
				<a>
					<Link to='/home'>
						Home
					</Link>
				</a>
			</li>
			<li>
				<a>
					<Link to='/profile'>
						Profile
					</Link>
				</a>
			</li>
			<li>
				<a>
					<Link to='/game'>
						Game
					</Link>
				</a>
			</li>
			<li>
				<a>
					<Link to='/chatapp'>
						Chat
					</Link>
				</a>
			</li>
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