import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  Popover,
  PopoverButton,
  PopoverContainer,
  StatusBadge,
} from "@twilio-paste/core";
import './AddFriends.css';
import { useAuth } from "../../context/AuthContext";
import { useSocketContext } from "../../context/WebSocketContext";
import HelperText from "../../components/HelperText";

export const AddFriends = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { socket, socketError, setSocketError } = useSocketContext();
  const [username, setUsername] = useState<string>('');
  const [friendError, setFriendError] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
	  setSocketError(null);
  }, []);

  useEffect(() => {
	  console.log("socketError : ", socketError)
	  console.log("frienderror : ", friendError)
	  if (!socketError) return;
	  if (socketError.func === 'addFriend') {
		  setFriendError(socketError.msg);
		  console.log("socketError inside : ", socketError.msg)
		  console.log("frienderror inside : ", friendError)
	  }
	  console.log("socketError after : ", socketError)
	  console.log("frienderror after : ", friendError)
  }, [socketError]);

  function AddFriendsDropdown() {

	const handleChange = (e: any) => {
		setUsername(e.target.value);
	}

	async function SendFriendRequest(e: any) {
		e.preventDefault();
		console.log(username)
        setFriendError(null);
        setSocketError(null);
        socket?.emit('addFriend', {
            friendName: username,
            userId: user?.id,
        });
    }

	return (
		<>
			<div className="add-friends">
				<h4>Add friend</h4>
				<div>
					<input
					id="username"
					name="username"
					onChange={handleChange}
					value={username}
					type="text"
					placeholder="Enter a username" />
				</div>
				<div>
					<h4 className="error">{friendError}</h4>
				</div>
				<div>
					<button onClick={SendFriendRequest}>Send friend request</button>
				</div>

			</div>
		</>
	)
}

  return (
    <div className="add-friends-dropdown">
      <button onClick={handleOpen}>Friend Requests</button>
      {open ? (
        <AddFriendsDropdown />
      ) : null}
    </div>
  );
};


// export const AddFrinds = () => {
//   const {socket} = useSocketContext();
//   const [target, setTarget] = useState("");
//   const [error, setError] = useState<boolean>(false);

//   const sendFriendsRequest = () => {
//     socket?.emit("friendsRequest", target);
//   };

//   const handleBadFriendsRequest = () => {
//     setError(true);
//   };

//   //Possile to handle already friends too
//   useEffect(() => {
//     socket?.on("badFriendsRequest", handleBadFriendsRequest);
//     return () => {
//       socket?.off("badFriendsRequest", handleBadFriendsRequest);
//     };
//   }, [socket]);

//   return (
//     <Box display="flex">
//       <PopoverContainer baseId="NewFriends">
//         <PopoverButton data-paste-element="BUTTON" variant="primary">Add newFriends</PopoverButton>
//         <Popover data-paste-element="BUTTON" aria-label="FriendRequest" width="size30">
//           <Input
//             type="text"
//             id={"friendsRequestId"}
//             placeholder="Enter a username"
//             onChange={(e) => {
//               setTarget(e.target.value);
//               setError(false);
//             }}
//           />
//           {error && (
//             <Box display="flex" columnGap="space40">
//               <StatusBadge as="span" variant="ProcessError">
//                 No such username
//               </StatusBadge>
//             </Box>
//           )}
//           <Button data-paste-element="BUTTON" variant="primary" onClick={sendFriendsRequest}>
//             Request to be friend
//           </Button>
//         </Popover>
//       </PopoverContainer>
//     </Box>
//   );
// };

export default AddFriends;
