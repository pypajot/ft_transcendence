import {
    Menu,
    MenuButton,
    MenuItem,
    MenuSeparator,
    useMenuState,
} from '@twilio-paste/core';
import { MoreIcon } from '@twilio-paste/icons/esm/MoreIcon';
import { useState } from 'react';
import { InviteToChannel } from './InviteToChannel';
import { useAuth } from '../../context/AuthContext';
import { ConversationInformation } from '../../../Types/conversationInformation.entity';
import { UserList } from './UserList';
import { OptionsUserList } from './OptionsUserList';
import { User } from '../../../Types/inferfaceList';
import { useChannelContext } from '../../context/ChannelContext';

export const OptionMenu = ({
    info,
}: {
    info: ConversationInformation | undefined;
}) => {
    const menu = useMenuState();
    const [displayInviteList, setDisplayInviteList] = useState<boolean>(false);
    const [displayUserList, setDisplayUserList] = useState<boolean>(false);
    const [displayOptionUserList, setDisplayOptionUserList] =
        useState<boolean>(false);
    const [target, setTarget] = useState<User | undefined>(undefined);
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
    //do we set the invite to play to any member of a channel ?
    return (
        <div>
            <MenuButton {...menu} variant="reset" size="reset">
                <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            {info?.ischannel && (
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
                    />
                    <Menu {...menu} aria-label="Preferences">
                        <MenuItem
                            {...menu}
                            onClick={() => {
                                user &&
                                    channelContext.leaveChannel(
                                        info?.name,
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
                        {channelContext.isChannelOwner() && (
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
                        <MenuItem {...menu}>Invite to Play </MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem {...menu}>Profile</MenuItem>
                    </Menu>{' '}
                </div>
            )}
        </div>
    );
};
