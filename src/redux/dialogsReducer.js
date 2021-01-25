const UPD_NEW_MESSAGE = "UPDATE-NEW-POST-MESSAGE";
const SEND_MESSAGE = "SEND-NEW-POST-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Roflan" },
    { id: 5, name: "Max" },
  ],
  messagesData: [
    { id: 1, message: "Hello! How are you?" },
    { id: 2, message: "Hello! How are you?2" },
    { id: 3, message: "Hello! How are you?3" },
    { id: 4, message: "Hello! How are you?4" },
    { id: 5, message: "Hello! How are you?5" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
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
