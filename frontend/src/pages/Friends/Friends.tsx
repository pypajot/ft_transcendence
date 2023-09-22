import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useSocketContext } from "../../context/WebSocketContext";
import { ProfileContext } from "../../context/ProfileContext";
import { Button } from "@twilio-paste/core";
import { Channel } from "../../context/ChatContext";

const Friends = () => {
  const socket = useSocketContext();
  const { user } = useAuth();
  async function SendFriendRequest(e: any) {
    e.preventDefault();
    socket.emit("addFriend", {
      friendName: e.target.username.value,
      userId: user?.id,
    });
  }

  function FriendRequestForm() {
    return (
      <>
        <form onSubmit={SendFriendRequest}>
          <div>
            <label>
              Username: <input type="text" name="username" />
            </label>
          </div>
          <div>
            <button type="submit">Send friend request</button>
          </div>
        </form>
      </>
    );
  }

  async function BlockUser(e: any) {
    e.preventDefault();
    socket.emit("blockUser", {
      targetName: e.target.username.value,
      userId: user?.id,
    });
  }

  function BlockUserForm() {
    return (
      <>
        <form onSubmit={BlockUser}>
          <div>
            <label>
              Username: <input type="text" name="username" />
            </label>
          </div>
          <div>
            <button type="submit">Block user</button>
          </div>
        </form>
      </>
    );
  }

  function FriendRequestList() {
    const { friendRequestList, setFriendRequestList } =
      useContext(ProfileContext);
    const { user } = useAuth();
    const socket = useSocketContext();
    const AcceptFriendRequest = async (id: number, accept: boolean) => {
      socket.emit("respondFriendRequest", {
        friendId: id,
        userId: user?.id,
        accept: accept,
      });
      setFriendRequestList((current) =>
        current.filter((value) => value.id !== id)
      );
    };
    const list = friendRequestList?.map((user: any) => (
      <>
        <div>{user.username} wants to be your friend !</div>
        <div>
          <Button
            variant="primary"
            onClick={() => AcceptFriendRequest(user.id, true)}
          >
            Accept
          </Button>
          <Button
            variant="secondary"
            onClick={() => AcceptFriendRequest(user.id, false)}
          >
            Decline
          </Button>
        </div>
      </>
    ));
    return <>{list}</>;
  }

  function handleChannelRequest(channelToJoin: Channel, accepted: boolean) {
    socket.emit("ChannelInvitResponse", {
      channel: channelToJoin,
      response: accepted,
    });
  }

  function ChannelRequestList() {
    const [channelRequestList, setChannelRequestList] = useState<Channel[]>([]);
    const socket = useSocketContext();

    const handleJoinRequest = (channel: Channel) => {
      setChannelRequestList([...channelRequestList, channel]);
    };
    useEffect(() => {
      socket?.on("joinRequest", handleJoinRequest);
      return () => {
        socket?.off("joinRequest", handleJoinRequest);
      };
    });
    const res = channelRequestList.map((elem, i) => {
      <div>
        <h4>You are invited in {elem.name} channel</h4>;
        <Button
          variant="primary"
          onClick={() => handleChannelRequest(elem, true)}
        >
          Accept
        </Button>
        <Button
          variant="primary"
          onClick={() => handleChannelRequest(elem, false)}
        >
          Decline
        </Button>
      </div>;
    });
    return res;
  }

  return (
    <>
      <Navbar />
      <div>
        <BlockUserForm />
      </div>
      <div>
        <FriendRequestForm />
      </div>

      <div>Friend requests:</div>
      <div>
        <FriendRequestList />
      </div>
      <div>Channel Request:</div>
    </>
  );
};

export default Friends;
