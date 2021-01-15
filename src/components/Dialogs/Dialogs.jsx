import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElement = props.state.messagesData.map((el) => (
    <Message text={el.message} />
  ));

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageSend = (e) => {
    let body = e.target.value;
    props.store.dispatch(updNewMessageBodyCreator(body));
  };
  // console.log(messageElement);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageSend}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
