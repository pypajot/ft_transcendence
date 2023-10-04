import { Dialog, DialogTitle, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface OptionUserListProps {
    open: boolean;
    onClose: () => void;
    target: User | undefined;
    me: User | null;
}
export const OptionsUserList = (props: OptionUserListProps) => {
    const { onClose, target, open, me } = props;
    const [options, setOptions] = useState<string[]>([]);
    const chatContext = useChatContext();
    const channelContext = useChannelContext();
    const { socket } = useSocketContext();
	const navigate = useNavigate();
	const { user } = useAuth();

    const handleClose = () => {
        onClose();
    };

    const handleMute = () => {
        if (target) {
            socket?.emit('MuteUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.channel?.name,
            });
        }
    };
    const handleBan = () => {
        if (target) {
            socket?.emit('BanUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.channel?.name,
            });
        }
    };

    const handleKick = () => {
        if (target) {
            socket?.emit('KickUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.channel?.name,
            });
        }
    };

    const handleInviteGame = (target: User | undefined) => {
        const targetId = target?.id;
        //const targetSocketId = target?.socketId;
        // get the username of the user who sent the invite
        const mode = 'Classic';
        // console.log('you invited someone to play: ', target?.username);
        // notify the other user that he has been invited to play
        socket?.emit('sendInviteToPlay', {targetId, mode});
        //navigate('/game', { state: { mode: true } });
    };

    const handleProfile = () => {
		navigate(`/profile?id=${target?.id}`);
        console.log(`Want to see profile of ${target?.username}`);
    };

    const handleBlock = () => {
        if (target && user) {
            socket?.emit('blockUser', {
                targetName: target.username,
                userId: user.id,
            });
        }
    };

    const handleSudo = () => {
        if (target) {
            socket?.emit('SudoUser', {
                targetId: target.id,
                channelName: chatContext.conversationInfo?.channel?.name,
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
                handleInviteGame(target);
                break;
            case 'Profile':
                handleProfile();
                break;
            case 'Block':
                handleBlock();
                break;
            case 'Sudo':
                handleSudo();
                break;
            case 'Unban':
                if (target) {
                    socket?.emit('UnbanUser', {
                        targetId: target.id,
                        channelName: chatContext.conversationInfo?.channel?.name,
                    });
                }
                break;
            case 'Unmute':
                if (target) {
                    socket?.emit('UnmuteUser', {
                        targetId: target.id,
                        channelName: chatContext.conversationInfo?.channel?.name,
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
        if (user && channelContext.isChannelOwner(user.id)) {
            setOptions([...choices, 'Sudo']);
        } else if (
            target &&
            channelContext.isAdmin() &&
            !channelContext.isChannelOwner(target.id)
        ) {
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
