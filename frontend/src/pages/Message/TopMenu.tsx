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
import { AddFriends } from "./AddFriends";
import { JoinChanel } from "../JoinChannel";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";

interface TopbarProps {
  setConversation: (val: ConversationInformation) => void;
}

export const TopbarMenu: React.FC<TopbarProps> = ({ setConversation }) => {
  const userDialogList = useUserDialogListState();

  const { user } = useAuth();
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
        <CreateNewConversation setConversation={setConversation} />
        <AddFriends />
        <JoinChanel setConversation={setConversation} />
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
