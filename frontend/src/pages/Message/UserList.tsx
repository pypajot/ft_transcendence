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
import { useChatContext } from '../../context/ChatContext';
import { User, useAuth } from '../../context/AuthContext';

interface UserListProps {
    onClose: (user: User | undefined) => void;
    open: boolean;
}

export const UserList = (props: UserListProps) => {
    const { onClose, open } = props;
    const chatContext = useChatContext();
    const [members, setMembers] = React.useState<User[]>([]);
    const [target, setTarget] = React.useState<User | undefined>(undefined);
    const { user } = useAuth();

    const handleClose = () => {
        onClose(target);
    };

    const handleListItemClick = (target: User) => {
        setTarget(target);
        onClose(target);
    };

    React.useEffect(() => {
        let isAlreadyThere = false;
        if (
            chatContext &&
            chatContext.channels &&
            chatContext.conversationInfo
        ) {
            const memberList = chatContext.channels.get(
                chatContext.conversationInfo.name
            )?.members;
            if (memberList) {
                memberList.map((member) => {
                    members.map((user) => {
                        if (user.id == member.id) {
                            isAlreadyThere = true;
                            return;
                        }
                    });
                    if (user?.username != member.username && !isAlreadyThere)
                        setMembers([...members, member]);
                });
            }
        }
    }, [chatContext, user]);

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
                            {members.map((member) => (
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
