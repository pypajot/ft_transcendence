import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "../../CSS/Signup.css";
import { useState } from "react";

const Signup = () => {
    const { setAccessToken } = useAuth();
    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    async function HandleSubmit(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formBody = {
            username: formData.get('username'),
            password: formData.get('password'),
        };
		setPasswordError(null);
		setUsernameError(null);
        const body = JSON.stringify(formBody);
        const response = await fetch('http://localhost:3333/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body,
            credentials: 'include',
        });
        if (response.status !== 201) {
            const message = (await response.json()).message.toString();
            if (message.includes('Credentials'))
                setUsernameError('Username already taken');
            if (message.includes('username should not be empty'))
                setUsernameError('Username cannot be empty');
            if (message.includes("must be longer") || message.includes("must be shorter"))
				setUsernameError("Username must be between 4 and 20 characters")
            if (message.includes('password'))
                setPasswordError('Password cannot be empty');
            return;
        }
        sessionStorage.setItem(
            'access_token',
            (await response.json()).access_token
        );
        setAccessToken(sessionStorage.getItem('access_token'));
    }

    return (
        <>
            <div className="signup-form">
                <a>
                    <img src="https://i.imgur.com/5zfcg9C.png" />
                </a>
            </div>
            <div className="signup-game">
                <a>
                    <img
                        src="https://i.imgur.com/vm7Rs68.gif"
                        className="signup-game-pong"
                    />
                </a>
            </div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <div className="username">
                            <div className="auth-input">
                                <input
                                    type="text"
                                    name="username"
                                    className="user-input"
                                    placeholder="username"
                                />
                            </div>
                            <div className="auth-error">
                                <span className="chat-error">
                                    {usernameError}
                                </span>
                            </div>
                        </div>
                        <div className="username">
                            <div className="auth-input">
                                <input
                                    type="password"
                                    name="password"
                                    className="user-input"
                                    placeholder="password"
                                />
                            </div>
                            <div className="auth-error">
                                <span className="chat-error">
                                    {passwordError}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="submit">
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="signup-other-options">
                <div>
                    <Link to="/login">
                        <button className="signup-button-classic">
                            Classic login
                        </button>
                    </Link>
                </div>
                <div className="login42">
                    <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A3333%2Fintralogin&response_type=code">
                        <button className="signup-button42">42 login</button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Signup;
