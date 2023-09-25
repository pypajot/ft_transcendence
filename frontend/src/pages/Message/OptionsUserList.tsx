import { SimpleDialogProps } from './InviteToChannel';
import {
    Dialog,
    DialogTitle,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';
import { blue } from 'material-ui-colors';
import Avatar from '@mui/material/Avatar';
import { User } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import List from '@mui/material/List';

interface OptionUserListProps {
    open: boolean;
    onClose: () => void;
    target: User | undefined;
}
export const OptionsUserList = (props: OptionUserListProps) => {
    const { onClose, target, open } = props;
    const [options, setOptions] = useState<string[]>([]);
    const chatContext = useChatContext();

    const handleClose = () => {
        onClose();
    };

    const handleOptionClick = () => {
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
        ];
        const choices2: string[] = ['Add', 'Play with', 'Profile'];
        if (chatContext.isChannelOwner()) {
            setOptions([...choices, 'Sudo ']);
        } else if (chatContext.isAdmin()) {
            setOptions(choices);
        } else {
            setOptions(choices2);
        }
    }, [chatContext, chatContext.channels]);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose an option below</DialogTitle>
            <List sx={{ pt: 0 }}>
                {' '}
                {options.map((choice, i) => (
                    <ListItem key={i}>
                        <ListItemButton onClick={handleOptionClick}>
                            <ListItemText
                                primary={choice + ' ' + target?.username}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};
