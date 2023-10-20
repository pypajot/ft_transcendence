import Navbar from '../../components/Navbar';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
	return (
		<>
		<Navbar/>
			<div className="logo-home">
				<a><img src="https://i.imgur.com/4tQ09J4.gif"/></a>
			</div>
			<div className="game-home">
				<img src="https://i.imgur.com/vm7Rs68.gif" className="game-pong-home"/>
			</div>
			<div className='play-button'>
				<Link to='/game'>
					<button className='play-button-home'>
						PLAY
					</button>
				</Link>
			</div>
		</>
	);
	
};

export default Home;