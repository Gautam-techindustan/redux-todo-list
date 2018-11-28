import { createStore } from "redux";
//reducer
let initialstate = 0;
export let increment = (state = initialstate, action) => {
  if (action.type === "add") {
    initialstate++;
    return initialstate;
  } else if (action.type === "sub") {
    initialstate--;
    return initialstate;
  }
};
//store created
export const store = createStore(increment);

store.subscribe(() => {
  console.log("state is now", store.getState());
});

//action
export const add = () => {
  return store.dispatch({ type: "add" });
};

export const sub = () => {
  return store.dispatch({ type: "sub" });
};
