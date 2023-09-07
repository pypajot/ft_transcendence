import { useEffect, useState } from 'react';
import './Profile.css';
import { refreshFetch } from '../../fetch/refreshFetch';
import { useRef } from 'react';
import Navbar from '../../components/Navbar';

const Profile = () => {

	const [user, setUser] = useState<string | null>();
	const run = useRef(0);


	useEffect(() => {
		const FetchUser = async () => {
			
			await refreshFetch("http://localhost:3333/user/me", {retry: false})
			.then(response => setUser(JSON.stringify(response.data)))
				
			
		};
			
		if (run.current !== 0)
			FetchUser();
		run.current++;
	}, []);

	return (
		<>
			<Navbar />
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