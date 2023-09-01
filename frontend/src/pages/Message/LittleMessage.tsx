export default function LittleMessage()  {

    let message = "Not Signed";

    const user = localStorage.getItem("username");

    if (user)
    {
        message = user;
    }
    return (
        <div>
            <h1>{message}</h1>
        </div>)
}