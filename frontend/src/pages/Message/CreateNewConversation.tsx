import { useEffect, useRef, useCallback } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';
import './CreateNewConversation.css';

function CreateNewConvDropdown () {
    const { socket } = useSocketContext();
    const chatContext = useChatContext();

    const channelCreation = useCallback(async (e: any) => {
        e.preventDefault();
        console.log ('Channel to be created: ' + e.target.channelInputId.value, e.target.channelPassword.value, e.target.selectType.value);
        socket?.emit('ChannelCreation', {
            type: e.target.selectType.value,
            name: e.target.channelInputId.value,
            pwd: e.target.channelPassword.value,
        });
    }, [socket]);

    return (
        <div className={'create-conv-dropdown'}>
            <form onSubmit={channelCreation}>
                <div>
                    <h4>Create new Channel</h4>
                    <input
                        type="text"
                        id="channelInputId"
                        placeholder="Enter Channel Name"
                    />
                </div>
                <div className='chat-error'>
                {chatContext.error.alreadyUsedChannelName ? (
                    <h5>Channel Name Already Taken</h5>
                ) : null}
                </div>
                <div>
                    <select id="selectType" name="selectType">
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <div>
                    <h4>Password (Optional)</h4>
                    <input
                        type="password"
                        id="channelPassword"
                        placeholder="Enter a Channel Password"
                    />
                </div>
                <button type="submit">Create!</button>
            </form>
        </div>
    );
}

export const CreateNewConversation = ({open, setOpen} : any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);


    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			if (open === "CreateNewConversation")
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
        if (open === "CreateNewConversation") {
            setOpen(null);
        } else {
            setOpen('CreateNewConversation');
        }
    };

    return (
        <div className='create-conv-button' ref={dropdownRef}>
            <button onClick={handleOpen}>
                Invite Friends to Discuss!
            </button>
            {open === "CreateNewConversation" ? (
                <CreateNewConvDropdown/>
            ) : null}
        </div>
    );
};
