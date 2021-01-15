import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      postsData: [
        { id: 1, message: "Hello! ", likesCount: "2" },
        { id: 2, message: "How are you?", likesCount: "4" },
      ],
      newPostText: "Hello",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
