import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import HelperText from "../../components/HelperText";

const Signup = () => {
  const { setAccessToken } = useAuth();
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  
  async function HandleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formBody = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const body = JSON.stringify(formBody);
    const response = await fetch("http://localhost:3333/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
      credentials: "include",
    });
    if (response.status !== 201) {
		const message = (await response.json()).message.toString();
		if (message.includes("Credentials"))
			setUsernameError("Username already taken")
		if (message.includes("username"))
			setUsernameError("Username cannot be empty")
		if (message.includes("password"))
			setPasswordError("Password cannot be empty")
		return ;
	}
    sessionStorage.setItem(
      "access_token",
      (await response.json()).access_token
    );
    setAccessToken(sessionStorage.getItem("access_token"));
  }

	return (
		<>
			<div className='signup-form'>
				<a><img src="https://i.imgur.com/5zfcg9C.png"/></a>
			</div>
			<div className="signup-game">
				<a><img src="https://i.imgur.com/vm7Rs68.gif" className="signup-game-pong"/></a>
			</div>
			<div>
				<form onSubmit={HandleSubmit}>
					<div>
						<div className='username'>
							<label>
								<input type="text" name="username" className='user-input' placeholder="username"/>
								<HelperText errorText={usernameError} />
							</label>
						</div>
						<div>
							<label>
								<input type="password" name="password" className='user-input' placeholder="password"/>
								<HelperText errorText={passwordError} />
							</label>
						</div>
					</div>
					<div className='submit'>
						<button type="submit" className="submit-button">
							Submit
						</button> 
					</div>
				</form>
			</div>
			<div className='signup-other-options'>
				<div>
					<Link to='/login'>
						<button className="signup-button-classic">
							Classic login
						</button>
					</Link>
				</div>
				<div className='login42'>
					<a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fintralogin&response_type=code">
							<button className="signup-button42">
									42 login
							</button>
					</a>
				</div>
			</div>
		</>
	);
};


export default Signup;