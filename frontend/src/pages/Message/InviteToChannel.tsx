import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import { useChatContext } from '../../context/ChatContext';
import { ProfileContext } from '../../context/ProfileContext';
import { useSocketContext } from '../../context/WebSocketContext';
import { Friend } from '../../../Types/inferfaceList';
import { useAuth } from '../../context/AuthContext';

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export function InviteToChannel(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const { socket } = useSocketContext();
    const chatContext = useChatContext();
    const { user } = useAuth();

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (target: Friend) => {
        socket?.emit('ChannelInvitation', {
            target: target.username,
            channel: chatContext.conversationInfo?.name,
        });
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                Add friends to {chatContext.conversationInfo?.name}
            </DialogTitle>
            <List sx={{ pt: 0 }}>
                {user &&
                    user.friends.map((friend) => {
                        if (chatContext.isBlocked(friend.id)) {
                            return;
                        }
                        return (
                            <ListItem key={friend.username}>
                                <ListItemButton
                                    onClick={() => handleListItemClick(friend)}>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{
                                                bgcolor: blue[100],
                                                color: blue[600],
                                            }}></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={friend.username} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                <ListItem></ListItem>
            </List>
        </Dialog>
    );
}
