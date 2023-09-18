import { ChatComposer } from "@twilio-paste/chat-composer";
import { useEffect, useState } from "react";
import {
  $getRoot,
  EditorState,
  ClearEditorPlugin,
} from "@twilio-paste/lexical-library";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  useMenuState,
} from "@twilio-paste/core";
import SendButton from "./SendButton";
import getMesageReceived from "./Hooks/GetUserMessageReceived";
import getMessageSent from "./Hooks/GetUserMessageSent";
import { Message } from "../../../public/Types/message.entity";
import { MessageInfo } from "../../../public/Types/messageInfo.entity";
import { BasicInMessage, BasicOutMessage } from "./BasicMessage";
import { useSocketContext } from "../../context/WebSocketContext";
import { useAuth } from "../../context/AuthContext";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { ConversationInformation } from "../../../public/Types/conversationInformation.entity";
import { SocketAddress } from "net";

const sortByDate = () => {
  return function (a: any, b: any) {
    if (a.createdAt > b.createdAt) {
      return 1;
    } else if (a.createdAt < b.createdAt) {
      return -1;
    }
    return 0;
  };
};

export const Conversation = ({ info }: { info: ConversationInformation }) => {
  const [content, setContent] = useState<string>("A basic chat composer");
  const { user } = useAuth();
  const [sentMessage, setSentMessage] = useState<Message[]>();
  const [receivedMessage, setReceivedMessage] = useState<Message[]>();
  const [conversationMsg, setConversationMsg] = useState<Message[]>([]);
  const [renderConversation, setRenderConversation] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const menu = useMenuState();

  //Make a component to get the previous messsage
  const socket = useSocketContext();

  useEffect(() => {
    if (!user) {
      setUsername("");
    } else {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    if (!info) {
      return;
    }
    if (username != "") {
      setRenderConversation(true);
      getMesageReceived({
        sender: info.name,
        receiver: username,
        isUser: info.isUser,
      }).then((res) => {
        setReceivedMessage(res);
      });
    } else {
      setRenderConversation(false);
    }
  }, [info, username]);

  useEffect(() => {
    if (!info) {
      return;
    }
    if (username != "") {
      getMessageSent({
        sender: username,
        receiver: info.name,
        isUser: info.isUser,
      }).then((res) => {
        setSentMessage(res);
      });
    }
  }, [info, user, username]);

  useEffect(() => {
    if (receivedMessage) {
      receivedMessage.forEach(function (obj) {
        obj.sent = false;
      });
    }
    if (sentMessage != undefined) {
      sentMessage.forEach(function (obj) {
        obj.sent = true;
      });
    }
    if (receivedMessage && sentMessage) {
      setConversationMsg(
        sentMessage.concat(receivedMessage).sort(sortByDate())
      );
      console.log(conversationMsg);
    }
  }, [sentMessage, receivedMessage]);

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const root = $getRoot();
      const text = root.getTextContent();
      setContent(text);
    });
  };

  const messageListener = (message: Message) => {
    if (message.senderName == info.name) {
      return;
    }
    setConversationMsg([...conversationMsg, message]);
  };

  const sendMessage = () => {
    if (content) {
      const message_content: MessageInfo = {
        content: content,
        target: info.name,
        ToUser: info.isUser,
      };
      socket?.emit("message", message_content);
    }
  };
  useEffect(() => {
    socket?.on("messageChannel", messageListener);
    return () => {
      socket?.off("messageChannel", messageListener);
    };
  }, [socket, messageListener]);
  useEffect(() => {
    socket?.on("messageSent", messageListener);
    return () => {
      socket?.off("messageSent", messageListener);
    };
  }, [messageListener, socket]);

  useEffect(() => {
    socket?.on("messageRcv", messageListener);
    return () => {
      socket?.off("messageRcv", messageListener);
    };
  }, [messageListener, socket]);

  return (
    <>
      {renderConversation && (
        <div>
          <h1>{info.name}</h1>
          <MenuButton {...menu} variant="reset" size="reset">
            <MoreIcon decorative={false} title="More options" />
          </MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Block</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite Into Channel</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Invite to Play </MenuItem>
          </Menu>{" "}
        </div>
      )}
      {conversationMsg &&
        conversationMsg.map(function (message, i) {
          if (message.sent) {
            return (
              <div key={i}>
                <BasicOutMessage content={message.content}></BasicOutMessage>
              </div>
            );
          } else {
            return (
              <div key={i}>
                <BasicInMessage content={message.content}></BasicInMessage>
              </div>
            );
          }
        })}
      {renderConversation && (
        <Box
          borderStyle="solid"
          borderWidth="borderWidth0"
          borderTopWidth="borderWidth10"
          borderColor="colorBorderWeak"
          display="flex"
          flexDirection="row"
          columnGap="space30"
          paddingX="space70"
          paddingTop="space50"
        >
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
            onChange={handleComposerChange}
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <SendButton onClick={sendMessage} />
        </Box>
      )}
    </>
  );
};
