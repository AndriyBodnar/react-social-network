import profileReducer, { addPostActionCreator } from "../redux/profileReducer";
//import { render, screen } from "@testing-library/react";
import App from "../App";

test("new post should be incrented", () => {
  // 1 test data
  let state = {
    postsData: [
      { id: 1, message: "Hello! ", likesCount: "2" },
      { id: 2, message: "How are you?", likesCount: "4" },
    ],
  };
  // 2 action
  let action = addPostActionCreator("it-cavasturseerf");
  let newState = profileReducer(state, action);
  //3 expect
  expect(newState.postsData.length).toBe(5);
});
