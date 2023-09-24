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

interface UserListProps {
    onClose: (user: User | undefined) => void;
    open: boolean;
}

export const UserList = (props: UserListProps) => {
    const { onClose, open } = props;
    const chatContext = useChatContext();
    const [target, setTarget] = React.useState<User | undefined>(undefined);

    const handleClose = () => {
        console.log('bruh');
        onClose(target);
    };

    const handleListItemClick = (target: User) => {
        setTarget(target);
        onClose(target);
    };

    return (
        <>
            {chatContext &&
                chatContext.channels &&
                chatContext.conversationInfo && (
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle>
                            List of the User of{' '}
                            {chatContext.conversationInfo?.name}
                        </DialogTitle>
                        <List sx={{ pt: 0 }}>
                            {chatContext.channels
                                .get(chatContext.conversationInfo.name)
                                ?.members.map((member) => (
                                    <ListItem key={member.id}>
                                        <ListItemButton
                                            onClick={() =>
                                                handleListItemClick(member)
                                            }>
                                            <ListItemText
                                                primary={member.username}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                        </List>
                    </Dialog>
                )}
        </>
    );
};
