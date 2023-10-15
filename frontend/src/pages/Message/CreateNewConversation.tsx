import React, { useEffect, useRef, useCallback } from 'react';
import { useSocketContext } from '../../context/WebSocketContext';
import { ChatContext, useChatContext } from '../../context/ChatContext';
import './CreateNewConversation.css';
import './ChatPage.css';


interface ConvDropDownProps {
    setOpen: any;
};

const CreateNewConvDropdown: React.FC<ConvDropDownProps> = ({ setOpen } : any) => {
    const { socket, socketError, setSocketError } = useSocketContext();
    const chatContext = useChatContext();

    const channelCreation = useCallback(async (e: any) => {
        e.preventDefault();
		setSocketError(null);
        console.log ('Channel to be created: ' + e.target.channelInputId.value, e.target.channelPassword.value, e.target.selectType.value);
        socket?.emit('ChannelCreation', {
            type: e.target.selectType.value,
            name: e.target.channelInputId.value,
            pwd: e.target.channelPassword.value,
        });
    }, [socket]);

    return (
        <div className={'create-conv-dropdown-menu'}>
            <form onSubmit={channelCreation}>
                <div>
                    <h4>Create new Channel</h4>
                    <input
                        className='chat-input-field'
                        type="text"
                        id="channelInputId"
                        placeholder="Enter Channel Name"
                    />
                </div>
                <div className='chat-error'>
                {socketError && socketError.func === "channelCreation" ? (
						<h5>{socketError.msg}</h5>) : null}
                </div>
                <div>
                    <select className='create-conv-select' id="selectType" name="selectType">
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <div>
                    <h4>Password (Optional)</h4>
                    <input
                        className='chat-input-field'
                        type="password"
                        id="channelPassword"
                        placeholder="Enter a Channel Password"
                    />
                </div>
                <div className='chat-error'></div>
                <button className='chat-submit-button' type="submit">Create!</button>
            </form>
        </div>
    );
}

export const CreateNewConversation = ({open, setOpen} : any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const chatContext = useChatContext();


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
        chatContext.resetError();
        if (open === "CreateNewConversation") {
            setOpen(null);
        } else {
            setOpen('CreateNewConversation');
        }
    };

    return (
        <div className='create-conv' ref={dropdownRef}>
            <button className='create-conv-button'
                onClick={handleOpen}>
                Create a Channel
            </button>
            {open === "CreateNewConversation" ? (
                <CreateNewConvDropdown setOpen={setOpen}/>
            ) : null}
        </div>
    );
};
 