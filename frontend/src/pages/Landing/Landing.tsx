import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {

	return (
		<>
			<div className="logo-home">
			<a><img src="https://i.imgur.com/4tQ09J4.gif" title="source: imgur.com" /></a>
			</div>
			<div className="log">
				<div className="display-button1">
					<Link to='/login'>
						<button className="button1">
							Classic login
						</button>
					</Link>
				</div>
				<div className="display-button2">
					<a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fintralogin&response_type=code">
						<button className="button2">
								42 login
						</button>
					</a>
				</div>
			</div>
		</>
	);
};


export default Landing;