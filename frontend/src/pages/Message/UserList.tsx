import {
    Dialog,
    DialogTitle,
    List,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { useSocketContext } from '../../context/WebSocketContext';
import { SimpleDialogProps } from './InviteToChannel';
import { useChatContext } from '../../context/ChatContext';
import { blue } from 'material-ui-colors';
import { ListItem } from '@twilio-paste/core';
import Avatar from '@mui/material/Avatar';
import { User } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import { OptionsUserList } from './OptionsUserList';

export const UserList = (props: SimpleDialogProps) => {
    const { onClose, open } = props;
    const [render, setRender] = useState<boolean>(true);
    const socket = useSocketContext();
    const chatContext = useChatContext();

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (target: User) => {
        onClose();
    };

    return (
        <>
            {render && (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>
                        List of the User of {chatContext.conversationInfo?.name}
                    </DialogTitle>
                    {chatContext &&
                        chatContext.channels &&
                        chatContext.conversationInfo &&
                        chatContext.channels
                            .get(chatContext.conversationInfo.name)
                            ?.members.map((member) => (
                                <ListItem key={member.username}>
                                    <ListItemButton
                                        onClick={() => handleListItemClick()}>
                                        <ListItemAvatar>
                                            <Avatar
                                                sx={{
                                                    bgcolor: blue[100],
                                                    color: blue[600],
                                                }}></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={member.username}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                </Dialog>
            )}
            <OptionsUserList onClose={handleClose} open={open} />
        </>
    );
};
