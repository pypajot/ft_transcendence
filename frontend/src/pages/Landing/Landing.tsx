import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {

	return (
		<>
			<div>
				<h1>Welcome !</h1>
			</div>
			<div>
				<Link to='/login'>
					<button>
						Classic login
					</button>
				</Link>
				<a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fintralogin&response_type=code">
					<button>
						42 login
					</button>
				</a>
			</div>
		</>
	);
};


export default Landing;