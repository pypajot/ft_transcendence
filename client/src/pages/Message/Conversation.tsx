import { ChatComposer } from '@twilio-paste/chat-composer'
import React, { useContext, useState } from 'react'
import {$getRoot, $getSelection, $createParagraphNode, $createTextNode, EditorState} from '@twilio-paste/lexical-library';
import { toggleTextFormatType } from 'lexical/LexicalUtils';
import { render } from 'react-dom';
import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';


export const Conversation = () => {
    const [content, setContent] = useState<string>("A basic chat composer");

    const handleComposerChange = (editorState: EditorState): void => {
      editorState.read(() => {
        const root = $getRoot();
        const text = root.getTextContent();
        console.log(text);
        setContent(text);
      });
    };

    return (
        <>
      <ChatComposer
        ariaLabel="A rich text chat composer"
        config={{
          namespace: 'customer-chat',
          onError (e) { throw e },
        }}
        onChange={handleComposerChange}
      />
        <div>Here is the content</div>
        <h1>{content}</h1>
        </>
    )
  }
  