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
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useChatContext } from '../../context/ChatContext';
import { User } from '../../context/AuthContext';
import { UserDTO } from '../Signup/api/dto/user.dto';
import { ProfileContext } from '../../context/ProfileContext';
import { ContactType } from '../../../public/Types/contact.entity';
import { useSocketContext } from '../../context/WebSocketContext';

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export function InviteToChannel(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const socket = useSocketContext();
    const chatContext = useChatContext();
    const friends: User[] = React.useContext(ProfileContext).friendList;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (target: User) => {
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
                {friends.map((friends) => (
                    <ListItem key={friends.username}>
                        <ListItemButton
                            onClick={() => handleListItemClick(friends)}>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        bgcolor: blue[100],
                                        color: blue[600],
                                    }}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={friends.username} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem></ListItem>
            </List>
        </Dialog>
    );
}
