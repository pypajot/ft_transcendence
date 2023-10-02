import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useChatContext } from '../../context/ChatContext';
import { useAuth } from '../../context/AuthContext';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';

interface UserListProps {
    onClose: (user: User | undefined) => void;
    open: boolean;
}

export const UserList = (props: UserListProps) => {
    const { onClose, open } = props;
    const chatContext = useChatContext();
    const channelContext = useChannelContext();
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
        const buff: User[] = [];
        if (channelContext.channels && chatContext.conversationInfo && chatContext.conversationInfo.channel) {
            const memberList = channelContext.channels.get(
                chatContext.conversationInfo.channel?.name)
            ?.members;
            if (memberList) {
                memberList.map((member) => {
                    if (user?.username != member.username) {
                        buff.push(member);
                    }
                });
                setMembers(buff);
            }
        }
    }, [
        chatContext,
        channelContext.channels,
        channelContext.arrayChannels,
        user,
    ]);

    return (
        <>
            {chatContext &&
                channelContext.channels &&
                chatContext.conversationInfo && (
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle>
                            List of the User of{' '}
                            {chatContext.conversationInfo?.channel?.name}
                        </DialogTitle>
                        <List sx={{ pt: 0 }}>
                            {members.map((member) => {
                                if (chatContext.isBlocked(member.id)) {
                                    return;
                                }
                                return (
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
                                );
                            })}
                        </List>
                    </Dialog>
                )}
        </>
    );
};
