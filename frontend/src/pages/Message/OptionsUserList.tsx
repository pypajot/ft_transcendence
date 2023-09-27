import { Dialog, DialogTitle, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';

interface OptionUserListProps {
    open: boolean;
    onClose: () => void;
    target: User | undefined;
}
export const OptionsUserList = (props: OptionUserListProps) => {
    const { onClose, target, open } = props;
    const [options, setOptions] = useState<string[]>([]);
    const chatContext = useChatContext();
    const channelContext = useChannelContext();
    const socket = useSocketContext();

    const handleClose = () => {
        onClose();
    };

    const handleMute = () => {
        if (target) {
            socket.emit('MuteUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.name,
            });
        }
    };
    const handleBan = () => {
        if (target) {
            socket.emit('BanUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.name,
            });
        }
    };

    const handleKick = () => {
        if (target) {
            socket.emit('KickUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.name,
            });
        }
    };

    const handleInviteGame = () => {
        console.log('invited You to Play');
    };

    const handleProfile = () => {
        console.log(`Want to see profile of ${target?.username}`);
    };

    const handleBlock = () => {
        if (target) {
            socket.emit('BlockUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.name,
            });
        }
    };

    const handleOptionClick = (choice: string) => {
        console.log(`dude : ${choice}`);
        switch (choice) {
            case 'Mute':
                handleMute();
                break;
            case 'Ban':
                handleBan();
                break;
            case 'Kick':
                handleKick();
                break;
            case 'Play with':
                handleInviteGame();
                break;
            case 'Profile':
                handleProfile();
                break;
            case 'Block':
                handleBlock();
                break;
            case 'Unban':
                if (target) {
                    socket?.emit('UnbanUser', {
                        targetId: target.id,
                        channelName: chatContext.conversationInfo?.name,
                    });
                }
                break;
            case 'Unmute':
                if (target) {
                    socket?.emit('UnmuteUser', {
                        targetId: target.id,
                        channelName: chatContext.conversationInfo?.name,
                    });
                }
                break;
            default:
                break;
        }
        onClose();
    };

    useEffect(() => {
        const choices: string[] = [
            'Mute',
            'Ban',
            'Kick',
            'Add',
            'Play with',
            'Profile',
            'Block',
        ];
        const choices2: string[] = ['Add', 'Play with', 'Profile', 'Block'];
        if (channelContext.isChannelOwner()) {
            setOptions([...choices, 'Sudo ']);
        } else if (channelContext.isAdmin()) {
            setOptions(choices);
        } else {
            setOptions(choices2);
        }
    }, [chatContext, channelContext]);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose an option below</DialogTitle>
            <List sx={{ pt: 0 }}>
                {' '}
                {options.map((choice, i) => {
                    if (
                        target &&
                        channelContext.isBan(target.id) &&
                        choice == 'Ban'
                    ) {
                        choice = 'Unban';
                    }
                    if (
                        target &&
                        channelContext.isMute(target.id) &&
                        choice == 'Mute'
                    ) {
                        choice = 'Unmute';
                    }
                    return (
                        <ListItem key={i}>
                            <ListItemButton
                                onClick={() => {
                                    //If Ban Unban
                                    //If Mute Unmute

                                    handleOptionClick(choice);
                                }}>
                                <ListItemText
                                    primary={choice + ' ' + target?.username}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Dialog>
    );
};
