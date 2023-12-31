import {
    Menu,
    MenuButton,
    MenuItem,
    MenuSeparator,
    useMenuState,
} from '@twilio-paste/core';
import { MoreIcon } from '@twilio-paste/icons/esm/MoreIcon';
import { useState, useEffect, useCallback } from 'react';
import { InviteToChannel } from './Channel/InviteToChannel';
import { useAuth } from '../../context/AuthContext';
import { UserList } from './UserList';
import { OptionsUserList } from './Channel/OptionsUserList';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';
import { useNavigate } from 'react-router-dom';
import { useSocketContext } from '../../context/WebSocketContext';
import { useChatContext } from '../../context/ChatContext';
import { InvitePending } from '../Game/InvitePending';

export const OptionMenu = () => {
    const menu = useMenuState();
    const [displayInviteList, setDisplayInviteList] = useState<boolean>(false);
    const [displayUserList, setDisplayUserList] = useState<boolean>(false);
    const [displayOptionUserList, setDisplayOptionUserList] =
        useState<boolean>(false);
    const channelContext = useChannelContext();
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleCloseUserList = (user: User | undefined) => {
        if (user) {
            setDisplayOptionUserList(true);
            setTarget(user);
        }
        setDisplayUserList(false);
    };
    const handleCloseOptionUserList = () => {
        setDisplayOptionUserList(false);
    };
    const { socket } = useSocketContext();
    const chatContext = useChatContext();
    const info = chatContext.conversationInfo;
    const [target, setTarget] = useState<User | undefined>(info?.user);
    const [key, setKey] = useState<number>(0);
    const [Invite, setInvite] = useState<boolean>(false);

    useEffect(() => {
        if (info && info.isUser) {
            setTarget(info.user);
        } else {
            setTarget(undefined);
        }
    }, [chatContext, info]);
    const handleBlock = useCallback(() => {
        socket?.emit('blockUser', {
            targetName: target?.username,
            userId: user?.id,
        });
        chatContext.setRenderConversation(false);
    }, [user, target, socket]);

    const handleInviteGame = () => {
        const targetId = target?.id;
        //const targetSocketId = target?.socketId;
        // get the username of the user who sent the invite
        const mode = 'Classic';
        // notify the other user that he has been invited to play
        setInvite(true);
        socket?.emit('sendInviteToPlay', { targetId, mode });
        setKey((prevkey) => prevkey + 1);
        //navigate('/game', { state: { mode: true } });
    };

    //do we set the invite to play to any member of a channel ?
    return (
        <div>
            {Invite && (
                <InvitePending
                    key={key}
                    target={target?.username || ''}
                    target_id={target?.id || 0}
                />
            )}
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
                        handleInviteGame={handleInviteGame}
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
                                <MenuItem
                                    {...menu}
                                    onClick={() => {
                                        info.channel?.name &&
                                            channelContext.emitDeleteChannel(
                                                info.channel?.name
                                            );
                                    }}>
                                    Delete Channel
                                </MenuItem>
                            </div>
                        )}
                    </Menu>{' '}
                </div>
            )}
            {info?.isUser && (
                <div>
                    <Menu {...menu} aria-label="Preferences">
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                handleBlock();
                            }}>
                            Block
                        </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                handleInviteGame();
                            }}>
                            Invite to Play{' '}
                        </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                navigate(`/profile?id=${info?.user?.id}`);
                            }}>
                            Profile
                        </MenuItem>
                    </Menu>{' '}
                </div>
            )}
        </div>
    );
};
