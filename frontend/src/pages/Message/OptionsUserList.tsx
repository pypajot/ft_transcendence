import { SimpleDialogProps } from './InviteToChannel';
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
export const OptionsUserList = (props: SimpleDialogProps) => {
    const { onClose, open } = props;
    const chatContext = useChatContext();

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose an option below</DialogTitle>
        </Dialog>
    );
};
