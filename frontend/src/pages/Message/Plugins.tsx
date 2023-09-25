import {
    useLexicalComposerContext,
    CLEAR_EDITOR_COMMAND,
    EditorState,
} from '@twilio-paste/lexical-library';
import { Box, Button } from '@twilio-paste/core';
import { func } from 'prop-types';
import { useEffect, useLayoutEffect } from 'react';

interface SendButtonProps {
    onClick: () => void;
}

const SentIcon = () => {
    return (
        <svg
            height="100"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001">
            <polygon
                style={{ fill: '#027372' }}
                points="102.537,236.375 150.572,471.15 503.831,40.851"
            />
            <polygon
                style={{ fill: '#42C8C6' }}
                points="298.835,395.21 503.319,42.278 363.968,430.963"
            />
            <path
                d="M509.532,34.999c-2.292-2.233-5.678-2.924-8.658-1.764L5.213,225.734c-2.946,1.144-4.967,3.882-5.192,7.034c-0.225,3.152,1.386,6.149,4.138,7.7l102.719,57.875l35.651,174.259c0.222,1.232,0.723,2.379,1.442,3.364c0.072,0.099,0.131,0.175,0.191,0.251c1.256,1.571,3.037,2.668,5.113,3c0.265,0.043,0.531,0.072,0.795,0.088c0.171,0.011,0.341,0.016,0.511,0.016c1.559,0,3.036-0.446,4.295-1.228c0.426-0.264,0.831-0.569,1.207-0.915c0.117-0.108,0.219-0.205,0.318-0.306l77.323-77.52c3.186-3.195,3.18-8.368-0.015-11.555c-3.198-3.187-8.368-3.18-11.555,0.015l-60.739,60.894l13.124-112.394l185.495,101.814c1.868,1.02,3.944,1.239,5.846,0.78c0.209-0.051,0.4-0.105,0.589-0.166c1.878-0.609,3.526-1.877,4.574-3.697c0.053-0.094,0.1-0.179,0.146-0.264c0.212-0.404,0.382-0.8,0.517-1.202L511.521,43.608C512.6,40.596,511.824,37.23,509.532,34.999z M27.232,234.712L432.364,77.371l-318.521,206.14L27.232,234.712z M162.72,316.936c-0.764,0.613-1.429,1.374-1.949,2.267c-0.068,0.117-0.132,0.235-0.194,0.354c-0.496,0.959-0.784,1.972-0.879,2.986L148.365,419.6l-25.107-122.718l275.105-178.042L162.72,316.936z M359.507,419.194l-177.284-97.307L485.928,66.574L359.507,419.194z"
                style={{ fill: '#000000' }}
            />
        </svg>
    );
};

interface Props {
    onClick: () => void;
}

export const EnterKeySubmitPlugin = ({ onClick }: Props) => {
    const [editor] = useLexicalComposerContext();

    useLayoutEffect(() => {
        const onKeyDown = (event: any) => {
            if (event.keyCode == 13) {
                onClick();
            }
        };
        return editor.registerRootListener(
            (rootElement: null | HTMLElement) => {
                if (rootElement !== null) {
                    rootElement.addEventListener('keydown', onKeyDown);
                }
            }
        );
    }, [editor]);
    //editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
    return <></>;
};

export const SendButtonPlugin = ({ onClick }: SendButtonProps) => {
    // get the editor from the composer context
    const [editor] = useLexicalComposerContext();

    // an event handler called from custom UI can the interact with the editor to perform certain actions
    const handleSend = () => {
        editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
        onClick();
    };

    return (
        <Box position="absolute" top="space30" right="space30">
            <Button variant="primary_icon" size="reset" onClick={handleSend}>
                <SentIcon />
            </Button>
        </Box>
    );
};
