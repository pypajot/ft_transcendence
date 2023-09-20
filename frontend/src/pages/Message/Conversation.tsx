import { ChatComposer } from "@twilio-paste/chat-composer";
import { useEffect, useState } from "react";
import {
  $getRoot,
  EditorState,
  ClearEditorPlugin,
} from "@twilio-paste/lexical-library";
import { Box } from "@twilio-paste/core";
import SendButton from "./SendButton";
import getMesageReceived from "./Hooks/GetUserMessageReceived";
import getMessageSent from "./Hooks/GetUserMessageSent";
import { Message } from "../../../public/Types/message.entity";
import { BasicInMessage, BasicOutMessage } from "./BasicMessage";
import { useSocketContext } from "../../context/WebSocketContext";
import { useAuth } from "../../context/AuthContext";

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

export const Conversation = ({ contact }: { contact: string }) => {
  const [content, setContent] = useState<string>("A basic chat composer");
  const {user} = useAuth();
  const [sentMessage, setSentMessage] = useState<Message[]>();
  const [receivedMessage, setReceivedMessage] = useState<Message[]>();
  const [conversationMsg, setConversationMsg] = useState<Message[]>([]);

  //Make a component to get the previous messsage
  const socket = useSocketContext();

  const getName = () => {
    if (!user) {
      return "";
    } else {
      return user.username;
    }
  };

  useEffect(() => {
    console.log(`Helllo ${contact}`);
    if (contact) {
      getMesageReceived({ sender: contact, receiver: getName() }).then((res) => {
        setReceivedMessage(res);
      });
    }
  }, [contact]);

  useEffect(() => {
    if (contact) {
      getMessageSent({ sender: getName(), receiver: contact }).then((res) => {
        setSentMessage(res);
      });
    }
  }, [contact]);

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

  const channelMessage = (message: Message) => {
    console.log(message);
    if (user && message.senderName != user.username) {
      message.sent = false;
    }
    setConversationMsg([...conversationMsg, message]);
  };


  const messageListener = (message: Message) => {
    console.log(message);
    setConversationMsg([...conversationMsg, message]);
  };

  const sendMessage = () => {
    if (content) {
      const message_content: string[] = [content, contact];
      socket?.emit("message", message_content);
    }
  };

  useEffect(() => {
    socket?.on("messageSent", messageListener);
    socket?.on("messageChannel", channelMessage);
    socket?.on("messageRcv", messageListener);
    return () => {
      socket?.off("messageSent", messageListener);
      socket?.off("messageChannel", channelMessage);
      socket?.off("messageRcv", messageListener);
    };
  }, [messageListener]);
  return (
    <>
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
    </>
  );
};
