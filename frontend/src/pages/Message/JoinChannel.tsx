import { useEffect, useRef } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { useChatContext } from '../../context/ChatContext';
import './JoinChannel.css';
import './ChatPage.css';

function JoinChannelDropdown({ joinChannel, friendError }: any) {
    return (
        <div className="chat-dropdown-joinmenu">
            <form onSubmit={joinChannel}>
                <div>
                    <h4> Join Channel Form </h4>
                    <input
                        className="chat-input-field"
                        name="id"
                        type="text"
                        placeholder="Enter a Channel"
                    />
                </div>
                {friendError !== 'Invalid password' && (
                    <span>{friendError}</span>
                )}
                {
                    <input
                        className="chat-input-field"
                        type="password"
                        name="password"
                        placeholder="Enter a Password"
                    />
                }
                <div>
                    {friendError === 'Invalid password' && (
                        <span>{friendError}</span>
                    )}
                    <button className="chat-submit-button" type="submit">
                        Join !
                    </button>
                </div>
            </form>
        </div>
    );
}

export const JoinChannel = ({
    open,
    setOpen,
    friendError,
    setFriendError,
}: any) => {
    const { socket, setSocketError } = useSocketContext();
    const { setConversationInfo } = useChatContext();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            if (open === 'joinChannel') setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpen = () => {
        if (open === 'joinChannel') setOpen(null);
        else {
            setFriendError('');
            setOpen('joinChannel');
        }
    };

    const joinChannel: any = (e: any) => {
        e.preventDefault();
        setSocketError(null);
        setFriendError('');
        console.log('password: ', e.target?.password?.value);
        socket?.emit('JoinChannel', {
            name: e.target.id.value,
            pass: e.target?.password?.value,
        });
    };

    const enterConversation = (arg: any) => {
        const convInfo: ConversationInformation = {
            isChannel: true,
            isUser: false,
            channel: arg,
        };
        setConversationInfo(convInfo);
    };

    useEffect(() => {
        socket?.on('successfullyJoinedChannel', enterConversation);
        return () => {
            socket?.off('successfullyJoinedChannel', enterConversation);
        };
    }, [socket]);

    return (
        <div className="join-channel-dropdown" ref={dropdownRef}>
            <button className="join-channel-button" onClick={handleOpen}>
                Join a Channel
            </button>
            {open === 'joinChannel' ? (
                <JoinChannelDropdown
                    joinChannel={joinChannel}
                    friendError={friendError}
                />
            ) : null}
        </div>
    );
};

export default JoinChannel;
