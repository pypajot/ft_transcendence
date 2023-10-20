import * as React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';
import { useSocketContext } from './WebSocketContext';
import { ErrorType } from '../../Types/inferfaceList';
import { ConversationInformation } from '../../Types/conversationInformation.entity';

type ChatContext = {
    conversationInfo: ConversationInformation | undefined;
    setConversationInfo: (
        coversationInfo: ConversationInformation | undefined
    ) => void;
    //channelRequestList: Channel[] | undefined;
    // setChannelRequestList: (channelRequestList: Channel[] | undefined) => void;
    error: ErrorType;
    resetError: () => void;
    setRenderConversation: (value: boolean) => void;
    renderConversation: boolean;
    isBlocked: (id: number) => boolean;
    tabDisplay: string;
    setTabDisplay: React.Dispatch<React.SetStateAction<string>>;
};

type ChatContextProviderProps = {
    children: React.ReactNode;
};
export const ChatContext = createContext<ChatContext | undefined>(undefined);

export default function ChatContextProvider(props: ChatContextProviderProps) {
    const [conversationInfo, setConversationInfo] = useState<
        ConversationInformation | undefined
    >(undefined);
    const [renderConversation, setRenderConversation] =
        useState<boolean>(false);
    const [tabDisplay, setTabDisplay] = useState<string>('friends');
    const { socket } = useSocketContext();
    const { user } = useAuth();
    // const [channelRequestList, setChannelRequestList] = useState<
    //    Channel[] | undefined
    // >(undefined);
    const [error, setError] = React.useState<ErrorType>({
        noSuchChannelName: false,
        wrongPrivileges: false,
        wrongPassword: false,
        alreadyUsedChannelName: false,
        Banned: false,
    });

    //Case we update : New Channel created | Joined a new channel

    const isBlocked = React.useCallback(
        (id: number) => {
            for (
                let i = 0;
                user && user.blocked && i < user?.blocked?.length;
                i++
            ) {
                if (user?.blocked[i] == id) {
                    return true;
                }
            }
            return false;
        },
        [user]
    );

    const setErrorFromBackend = (err: ErrorType) => {
        setError(err);
    };

    const resetError = React.useCallback(() => {
        setError({
            noSuchChannelName: false,
            wrongPrivileges: false,
            wrongPassword: false,
            alreadyUsedChannelName: false,
            Banned: false,
        });
    }, [setError]);

    React.useEffect(() => {
		setConversationInfo(undefined);
        // socket?.on('InitChannelsRequest', initChannelsRequest);
        socket?.on('Error', setErrorFromBackend);
        return () => {
            socket?.off('Error', setErrorFromBackend);
        };
    }, [socket]);

    const value = useMemo(
        () => ({
            conversationInfo,
            setConversationInfo,
            //  channelRequestList,
            // setChannelRequestList,
            error,
            resetError,
            setRenderConversation,
            renderConversation,
            isBlocked,
            tabDisplay,
            setTabDisplay,
        }),
        [
            conversationInfo,
            setConversationInfo,
            //channelRequestList,
            //setChannelRequestList,
            error,
            resetError,
            setRenderConversation,
            renderConversation,
            isBlocked,
            tabDisplay,
            setTabDisplay,
        ]
    );
    return (
        <ChatContext.Provider value={value}>
            {props.children}
        </ChatContext.Provider>
    );
}

export function useChatContext() {
    const context = useContext(ChatContext);

    if (context == undefined) {
        throw new Error(
            'You need to use ChatContext with in a ChatContextProvider'
        );
    }
    //   if (context.channelRequestList == undefined) {
    //      context.channelRequestList = [];
    // }
    return context;
}
