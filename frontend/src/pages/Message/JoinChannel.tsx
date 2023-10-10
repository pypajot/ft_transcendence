import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';
import './JoinChannel.css';

function JoinChannelDropdown (
    {
        requestPassword,
        joinChannel,
		friendError,
      } : any
) {
    return (
            <div className='join-channel'>
				<form onSubmit={joinChannel}>
                <div>
                    <h4> Channel Name </h4>
                    <input
                        name="id"
                        type="text"
                        placeholder="Enter a Channel"
                        // value={channelName}
                        // onChange={(e) => {
                        //     setChannelName(e.target.value);
                        //     chatContext.resetError();
                        //     setReqPassword(false);
                        //     setPassword('');
                        // }}
                    />
                </div>
                {(friendError !== "Invalid password") && <span>{friendError}</span>}
                {(requestPassword || friendError === "Invalid password") && (
                <div>
                    <h4> Password is required </h4>
                    <input
                        type="password"
						name="password"
                        placeholder="Enter a Password"
                    />
                </div>
                )}
                <div>
                {friendError === "Invalid password" && <span>{friendError}</span>}
                    <button type="submit">Join !</button>
					</div>
				</form>
            </div>
        )
}

export const JoinChannel = ({open, setOpen, friendError, setFriendError} : any) => {
    const [requestPassword, setReqPassword] = useState(false);
    const { socket, setSocketError } = useSocketContext();
    const {setConversationInfo} = useChatContext();
	const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			if (open === "joinChannel")
				setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOpen = () => {
		if (open === "joinChannel")
			setOpen(null)
		else {
			setFriendError("");
			setOpen("joinChannel");
		}
      };
      
    const joinChannel: any = (e: any) => {
		e.preventDefault();
		setSocketError(null);
		setFriendError("");
		// chatContext.resetError();
		if (e.target.password === undefined)
			socket?.emit('JoinChannel', { name: e.target.id.value, pass: "" });
		else
			socket?.emit('JoinChannel', { name: e.target.id.value, pass: e.target.password.value });
        //Checker que on a bien join puis
        // setConversation(channelName);
    };

    const handleReqPassword =() => {
        setReqPassword(true);
        //Reset Error ?
    };

    const enterConversation =
        (arg: any) => {
            const convInfo: ConversationInformation = {
                isChannel: true,
                isUser: false,
                channel: arg,
            };
            setConversationInfo(convInfo);
        };

	

    useEffect(() => {
        socket?.on('requestPassword', handleReqPassword);
        socket?.on('successfullyJoinedChannel', enterConversation);
        return () => {
            socket?.off('requestPassword', handleReqPassword);
            socket?.off('successfullyJoinedChannel', enterConversation);
        };
    }, [socket]);

    // const errorName =
    //     chatContext.error.noSuchChannelName &&
    //     !chatContext.error.wrongPrivileges;
    // const errorPriv =
    //     !chatContext.error.noSuchChannelName &&
    //     chatContext.error.wrongPrivileges;
    // const banned = !errorPriv && !errorName && chatContext.error.Banned;
	// const wrongPassword = !errorPriv && !errorName && !banned && chatContext.error.wrongPassword;

    return (
        <div className='join-channel-dropdown' ref={dropdownRef}>
            <button onClick={handleOpen}>Join a Channel</button>
            {open === "joinChannel" ? (
                    <JoinChannelDropdown
                    requestPassword={requestPassword}
                    joinChannel={joinChannel}
					friendError={friendError}
                    />
            ) : null}
        </div>
    );
};

export default JoinChannel
