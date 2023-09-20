import Navbar from '../../components/Navbar';
import './Home.css';

const Home = () => {
	return (
		<>
		<Navbar/>
			<div className="game-home">
				<a><img src="https://i.imgur.com/vm7Rs68.gif" className="game-pong-home"/></a>
			</div>
			<div className="logo-home">
				<a><img src="https://i.imgur.com/4tQ09J4.gif"/></a>
			</div>
		</>
	);
	
};

export default Home;