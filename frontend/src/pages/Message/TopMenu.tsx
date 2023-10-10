import {
    Topbar,
    TopbarActions,
    UserDialog,
    UserDialogContainer,
    UserDialogListItem,
    UserDialogUserInfo,
    UserDialogUserName,
    useUserDialogListState,
} from '@twilio-paste/core';
import { CreateNewConversation } from './CreateNewConversation';
import { useAuth } from '../../context/AuthContext';
import { AddFriends } from './AddFriends';
import { JoinChannel } from './JoinChannel';

export const TopbarMenu = () => {
    const userDialogList = useUserDialogListState();

    const { user } = useAuth();
    const getName = () => {
        if (user) {
            return user.username;
        } else {
            return 'dude';
        }
    };
    const name = getName();

    return (
        <Topbar id="topbar">
            <TopbarActions justify="start">
            </TopbarActions>
        </Topbar>
    );
};
