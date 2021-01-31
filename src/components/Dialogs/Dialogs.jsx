import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messageElement = state.messages.map((el) => (
    <Message text={el.message} key={el.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageSend = (e) => {
    debugger;
    let body = e.target.value;
    props.updNewMessageBody(body);
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
