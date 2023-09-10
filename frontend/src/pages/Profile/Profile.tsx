import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import Navbar, { Navbar2 } from '../../components/Navbar';

const Profile = () => {

	const { user } = useAuth();
	return (
		<>
			<Navbar/>
			<div>
				<h1>Profile</h1>
			</div>
			<div>
				<p>
					{user}
				</p>
			</div>
		</>
	);
};


export default Profile;