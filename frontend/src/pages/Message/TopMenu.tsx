import {
  Topbar,
  TopbarActions,
  UserDialog,
  UserDialogContainer,
  UserDialogListItem,
  UserDialogUserInfo,
  UserDialogUserName,
  useUserDialogListState,
} from "@twilio-paste/core";
import { CreateNewConversation } from "./CreateNewConversation";
import { useAuth } from "../../context/AuthContext";

export const TopbarMenu = () => {
  const userDialogList = useUserDialogListState();

  const {user} = useAuth();
  const getName = () => {
    if (user) {
      return user.username;
    } else {
      return "dude";
    }
  };
  const name = getName();

  return (
    <Topbar id="topbar">
      <TopbarActions justify="start">
        <CreateNewConversation />
      </TopbarActions>
      <TopbarActions justify="end">
        <UserDialogContainer name={name} baseId="i-am-user-dialog">
          <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
            <UserDialogUserInfo>
              <UserDialogUserName>{name}</UserDialogUserName>
            </UserDialogUserInfo>
            <UserDialogListItem {...userDialogList}>Log out</UserDialogListItem>
          </UserDialog>
        </UserDialogContainer>
      </TopbarActions>
    </Topbar>
  );
};
