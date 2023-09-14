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

export const TopbarMenu = () => {
  const userDialogList = useUserDialogListState();
  const getName = () => {
    const tmp = localStorage.getItem("username");
    if (tmp) {
      return tmp;
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
