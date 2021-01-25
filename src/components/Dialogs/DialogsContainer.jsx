import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageSend = (body) => {
    props.store.dispatch(updNewMessageBodyCreator(body));
  };
  // console.log(messageElement);

  return (
    <Dialogs
      updNewMessageBody={onNewMessageSend}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
