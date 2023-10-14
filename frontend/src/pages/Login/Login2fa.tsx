import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import HelperText from "../../components/HelperText";
import "./Login.css"

function Login2fa() {
  const { setAccessToken } = useAuth();
  const [codeError, setCodeError] = useState<string | null>(null);

  async function HandleSubmit(e: any) {
    e.preventDefault();
	setCodeError(null);
    const response = await fetch("http://localhost:3333/auth/2fa/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("2faToken")}`,
      },
      body: JSON.stringify({ code: e.target.code.value }),
      credentials: "include",
    });
    if (response.status !== 201) {
		if ((await response.json()).message.includes("Invalid"))
			setCodeError("Invalid code");
		return;
	}
    sessionStorage.removeItem("2faToken");
    sessionStorage.setItem(
      "access_token",
      (await response.json()).access_token
    );
    setAccessToken(sessionStorage.getItem("access_token"));
  }

  return (
    <div style={{margin: "25% 25% 25% 25%"}}>
      <form onSubmit={HandleSubmit}>
		<div className="username">
			<div className="auth-input">
			<input className="user-input" type="text" name="code" placeholder="Code" />
			</div>
			<div className="auth-error">
				<span className="chat-error">{codeError}</span>
			</div>
		</div>
		<div>
          <button className="login-button42" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login2fa;
