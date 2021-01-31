import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   // console.log(messageElement);

//   return (
//     <StoreContent.Consumer>
//       {(store) => {
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };
//         let onNewMessageSend = (body) => {
//           store.dispatch(updNewMessageBodyCreator(body));
//         };
//         return (
//           <Dialogs
//             updNewMessageBody={onNewMessageSend}
//             sendMessage={onSendMessageClick}
//             dialogsPage={store.getState().dialogsPage}
//           />
//         );
//       }}
//     </StoreContent.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updNewMessageBody: (body) => {
      dispatch(updNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
