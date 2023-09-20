import { useAuth } from "../../context/AuthContext";

function Login2fa() {
  const { setAccessToken } = useAuth();

  async function HandleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/auth/2fa/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("2faToken")}`,
      },
      body: JSON.stringify({ code: e.target.code.value }),
      credentials: "include",
    });
    if (response.status !== 201) return;
    sessionStorage.removeItem("2faToken");
    sessionStorage.setItem(
      "access_token",
      (await response.json()).access_token
    );
    setAccessToken(sessionStorage.getItem("access_token"));
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>
            Authenticator code: <input type="text" name="code" />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login2fa;
