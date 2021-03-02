import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    // updNewMessageBody: (body) => {
    //   dispatch(updNewMessageBodyCreator(body));
    // },
  };
};
// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
