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
        if (chatContext.error.alreadyUsedChannelName) {
            console.log ('Channel name already taken');
            return (
                <div>
                    <h1>Channel Name Already Taken</h1>
                </div>
            );
        }
    }, [chatContext.error.alreadyUsedChannelName, socket]);

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
            <button className="create-conv-button" onClick={handleOpen}>
                Invite Friends to Discuss!
            </button>
            {open === "CreateNewConversation" ? (
                <CreateNewConvDropdown/>
            ) : null}
        </div>
    );
};

/* export const CreateNewConversation = () => {
    const [channelType, setChannelType] = useState('Public');
    const [_public, setPublic] = useState(true);
    const [channelName, setChannelName] = useState('');
    const [channelPassword, setchannelPassword] = useState('');
    const { socket } = useSocketContext();
    const chatContext = useChatContext();

    useEffect(() => {
        if (_public) {
            setChannelType('Public');
        } else {
            setChannelType('Private');
        }
    }, [_public]);

    const channelCreation = () => {
        socket?.emit('ChannelCreation', {
            type: channelType,
            name: channelName,
            pwd: channelPassword,
        });
        if (chatContext.error.alreadyUsedChannelName) {
            return (
                <div>
                    <h1>Channel Name Already Taken</h1>
                </div>
            );
        }
    };
    const handleSelectChange = () => {
        if (_public) {
            setPublic(false);
        } else {
            setPublic(true);
        }
    };

    //Checker si le channel name est pas pris
    //Checker si le channel est public ou priver
    //Checker si il y a un password ou pas

    //Cree le channel en fonction de ses infos
    //Display le channel sur la droite

    //Reflechir a comment organiser la liste des conversations sur la gauches

    return (
        <>
            <Box display="flex">
                <PopoverContainer baseId="NewConversation">
                    <PopoverButton variant="primary">
                        Invite Friends to Discuss !
                    </PopoverButton>
                    <Popover aria-label="CreateChannel" width="size40">
                        <Form>
                            <Heading
                                as="h3"
                                id={'CreateChannel'}
                                variant={'heading30'}>
                                Create new Channel
                            </Heading>
                            <FormControl>
                                <Label>ChannelName</Label>
                                <Input
                                    type="text"
                                    id={'channelInputId'}
                                    placeholder="Enter Channel Name"
                                    onChange={(e) => {
                                        setChannelName(e.target.value);
                                        chatContext.resetError();
                                    }}
                                />
                                {chatContext.error.alreadyUsedChannelName && (
                                    <Box display="flex" columnGap="space40">
                                        <StatusBadge
                                            as="span"
                                            variant="ProcessError">
                                            Channel Name Already Taken
                                        </StatusBadge>
                                    </Box>
                                )}
                            </FormControl>
                            <FormControl>
                                <Select
                                    id="selectType"
                                    name="selectType"
                                    onChange={handleSelectChange}>
                                    <Option value="Public">Public</Option>
                                    <Option value="Private">Private</Option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Label>Password (Optional)</Label>
                                <Input
                                    type="password"
                                    id={'channelPassword'}
                                    placeholder="Enter a Channel Password"
                                    onChange={(e) => {
                                        setchannelPassword(e.target.value);
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <Button
                                    variant="primary"
                                    onClick={channelCreation}>
                                    Create !
                                </Button>
                            </FormControl>
                        </Form>
                    </Popover>
                </PopoverContainer>
            </Box>
        </>
    );
}; */