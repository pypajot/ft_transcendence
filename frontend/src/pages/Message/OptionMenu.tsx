import {
    Menu,
    MenuButton,
    MenuItem,
    MenuSeparator,
    useMenuState,
} from '@twilio-paste/core';
import { MoreIcon } from '@twilio-paste/icons/esm/MoreIcon';
import { useState, useEffect } from 'react';
import { InviteToChannel } from './InviteToChannel';
import { useAuth } from '../../context/AuthContext';
import { UserList } from './UserList';
import { OptionsUserList } from './OptionsUserList';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';
import { useNavigate } from 'react-router-dom';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';

export const OptionMenu = () => {
    const menu = useMenuState();
    const [displayInviteList, setDisplayInviteList] = useState<boolean>(false);
    const [displayUserList, setDisplayUserList] = useState<boolean>(false);
    const [displayOptionUserList, setDisplayOptionUserList] =
        useState<boolean>(false);
    const channelContext = useChannelContext();
    const { user } = useAuth();
    const handleCloseUserList = (user: User | undefined) => {
        if (user) {
            setDisplayOptionUserList(true);
            setTarget(user);
        }
        setDisplayUserList(false);
        console.log(user);
    };
    const handleCloseOptionUserList = () => {
        setDisplayOptionUserList(false);
    };
    const { socket } = useSocketContext();
    const chatContext = useChatContext();
    const info = chatContext.conversationInfo;
    const [target, setTarget] = useState<User | undefined>(info?.user);

    useEffect(() => {
        if (info && info.isUser) {
            console.log(info.user);
            setTarget(info.user);
        } else {
            setTarget(undefined);
        }
        //print infos about the me, the user
        console.log('me, the user infos: ' + user?.username + ' ' + user?.id);
        // print infos about the target, the user
        console.log(
            'target infos: ' + target?.username + ' ' + target?.socketId
        );
    }, [chatContext, info]);

    const handleInviteGame = () => {
        const targetId = target?.id;
        //const targetSocketId = target?.socketId;
        // get the username of the user who sent the invite
        const mode = 'Classic';
        console.log('you invited someone to play: ', target?.username);
        // notify the other user that he has been invited to play
        socket?.emit('sendInviteToPlay', {targetId, mode});
        //navigate('/game', { state: { mode: true } });
    }

    //do we set the invite to play to any member of a channel ?
    return (
        <div>
            <MenuButton {...menu} variant="reset" size="reset">
                <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            {info?.isChannel && (
                <div>
                    <InviteToChannel
                        open={displayInviteList}
                        onClose={() => {
                            setDisplayInviteList(false);
                        }}
                    />
                    <UserList
                        open={displayUserList}
                        onClose={handleCloseUserList}
                    />
                    <OptionsUserList
                        onClose={handleCloseOptionUserList}
                        target={target}
                        open={displayOptionUserList}
                        me={user}
                    />
                    <Menu {...menu} aria-label="Preferences">
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                user &&
                                    info &&
                                    info.channel &&
                                    channelContext.leaveChannel(
                                        info.channel.name,
                                        user?.username
                                    );
                            }}>
                            Leave
                        </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                setDisplayInviteList(true);
                            }}>
                            Invite Into Channel
                        </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                setDisplayUserList(true);
                            }}>
                            {' '}
                            User List{' '}
                        </MenuItem>
                        {user && channelContext.isChannelOwner(user.id) && (
                            <div>
                                <MenuSeparator {...menu} />
                                <MenuItem {...menu}>Delete Channel</MenuItem>
                            </div>
                        )}
                    </Menu>{' '}
                </div>
            )}
            {info?.isUser && (
                <div>
                    <Menu {...menu} aria-label="Preferences">
                        <MenuItem {...menu}>Block</MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                handleInviteGame();
                            }}>
                            Invite to Play{' '}
                        </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem {...menu}>Profile</MenuItem>
                    </Menu>{' '}
                </div>
            )}
        </div>
    );
};
