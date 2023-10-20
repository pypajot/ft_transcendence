import { useNavigate } from "react-router-dom";

export const NotFound = () => {
	const navigate = useNavigate();
	return (
		<>
			<button onClick={() => {navigate("/home")}}>
				Back to home
			</button>
			<div>
				Oops, the page you requested does not exist !
			</div>
		</>
	)
}

export default NotFound;
