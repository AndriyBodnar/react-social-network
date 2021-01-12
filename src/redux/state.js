let state = {
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
  },
  profilePage: {
    postsData: [
      { id: 1, message: "Hello! ", likesCount: "2" },
      { id: 2, message: "How are you?", likesCount: "4" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);
};

export default state;
