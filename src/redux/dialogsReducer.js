const UPD_NEW_MESSAGE = "UPDATE-NEW-POST-MESSAGE";
const SEND_MESSAGE = "SEND-NEW-POST-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPD_NEW_MESSAGE:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updNewMessageBodyCreator = (body) => {
  return {
    type: UPD_NEW_MESSAGE,
    body: body,
  };
};

export default dialogsReducer;
