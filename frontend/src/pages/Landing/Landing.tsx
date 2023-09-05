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
				<Link to='/intralogin'>
					<button>
						42 login
					</button>
				</Link>
			</div>
		</>
	);
};


export default Landing;