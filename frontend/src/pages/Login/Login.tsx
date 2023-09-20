import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setAccessToken } = useAuth();
  const navigate = useNavigate();

  async function HandleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formBody = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    // alert(JSON.stringify(formBody));
    const response = await fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formBody),
      credentials: "include",
    });
    if (response.status !== 201) return;
    const responseJson = await response.json();
    if (responseJson.user2fa) {
      sessionStorage.setItem("2faToken", responseJson.access_token);
      navigate("/login2fa");
    } else {
      sessionStorage.setItem("access_token", responseJson.access_token);
      setAccessToken(sessionStorage.getItem("access_token"));
    }
    // .then(response => response.json())
    // .then(response => sessionStorage.setItem("access_token",response.access_token))
  }

  return (
    <>
      <div className="login-form">
        <a>
          <img src="https://i.imgur.com/ca0eJ1A.png" />
        </a>
      </div>
      <div className="login-game">
        <a>
          <img
            src="https://i.imgur.com/vm7Rs68.gif"
            className="login-game-pong"
          />
        </a>
      </div>
      <div>
        <form onSubmit={HandleSubmit}>
          <div>
            <div className="username">
              <label>
                <input
                  type="text"
                  name="username"
                  className="user-input"
                  placeholder="username"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="password"
                  name="password"
                  className="user-input"
                  placeholder="password"
                />
              </label>
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="login-other-options">
        <div className="login42">
          <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fintralogin&response_type=code">
            <button className="login-button42">42 login</button>
          </a>
        </div>
        <div>
          <Link to="/signup">
            <button className="login-register-button">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
