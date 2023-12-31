import { Dialog, DialogTitle, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { useSocketContext } from '../../../context/WebSocketContext';
import { useChatContext } from '../../../context/ChatContext';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { User } from '../../../../Types/inferfaceList';
import { useChannelContext } from '../../../context/ChannelContext';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface OptionUserListProps {
    open: boolean;
    onClose: () => void;
    target: User | undefined;
    me: User | null;
    handleInviteGame: () => void;
}
export const OptionsUserList = (props: OptionUserListProps) => {
    const { onClose, target, open, handleInviteGame } = props;
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

    const handleProfile = () => {
        navigate(`/profile?id=${target?.id}`);
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
            case 'View Profile':
                handleProfile();
                break;
            case 'Promote to admin':
                handleSudo();
                break;
            case 'Unban':
                if (target) {
                    socket?.emit('UnbanUser', {
                        targetId: target.id,
                        channelName:
                            chatContext.conversationInfo?.channel?.name,
                    });
                }
                break;
            case 'Unmute':
                if (target) {
                    socket?.emit('UnmuteUser', {
                        targetId: target.id,
                        channelName:
                            chatContext.conversationInfo?.channel?.name,
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
            // 'Add',
            'Play with',
            'View Profile',
            // 'Block',
        ];
        const choices2: string[] = ['Play with', 'View Profile'];

        if (user && channelContext.isChannelOwner(user.id)) {
            setOptions(['Promote to admin', ...choices]);
        } else if (
            target &&
            user &&
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
            <DialogTitle>
                {target?.username}
                <br />
                Choose an option below
            </DialogTitle>
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
                                <ListItemText primary={choice} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Dialog>
    );
};
