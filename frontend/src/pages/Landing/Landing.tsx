import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="logo-landing">
        <a>
          <img src="https://i.imgur.com/4tQ09J4.gif" />
        </a>
      </div>
      <div className="game-landing">
        <a>
          <img
            src="https://i.imgur.com/vm7Rs68.gif"
            className="game-pong-landing"
          />
        </a>
      </div>
      <div className="log">
        <Link to="/login">
          <button className="button1">Classic login</button>
        </Link>
        <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-3aaed99808e42f414bc3012769d17d2df75acba4efc662238fb0e9ad81b91339&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fintralogin&response_type=code">
          <button className="button2">42 login</button>
        </a>
      </div>
      <div className="account">Don't have an account ?</div>
      <div>
        <Link to="/signup">
          <button className="register-button">Register here</button>
        </Link>
      </div>
    </>
  );
}

export default Landing;
