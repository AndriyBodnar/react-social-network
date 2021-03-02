import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messageElement = state.messages.map((el) => (
    <Message text={el.message} key={el.id} />
  ));

  let newMessageBody = state.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // };
  // let onNewMessageSend = (e) => {
  //   let body = e.target.value;
  //   props.updNewMessageBody(body);
  // };
  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };
  // console.log(messageElement);

  if (!props.isAuth) {
    return <Redirect to={`/login`} />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messageElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
        {/* <Field
          value={newMessageBody}
          onChange={onNewMessageSend}
          placeholder="Enter your message"
          component="textarea"
        ></Field> */}
      </div>
      <div>
        <button>Send</button>
        {/* <button onClick={onSendMessageClick}>Send</button> */}
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
