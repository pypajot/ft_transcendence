export default function Messages({message}: {message: String[]}) {
  return <div>{
        message.map((message, index) =>
        <div key={index}>{message} </div>
        )
  }</div>
}
