import { createStore } from "redux";

//reducer
let initial = {
  names: [],
  completed: []
};

export let todolist = (state = initial, action) => {
  if (action.type === "add") {
    let { names } = state;
    names = [...names, action.payload];
    return { ...state, names };
  } else if (action.type === "del") {
    let { names } = state;
    names.splice(action.payload, 1);
    names = [...names];
    // names = [
    //   ...names.slice(0, action.paylyoad),
    //   ...names.slice(action.payload + 1, names.length)
    // ];
    return { ...state, names };
  } else if (action.type === "edit") {
    let { names } = state;
    names[action.payload.index] = action.payload.newvalue;
    names = [...names];
    return { ...state, names };
  } else if (action.type === "completed") {
    let { names } = state;
    let { completed } = state;
    let item = names.splice(action.payload.index, 1);
    names = [...names];
    completed = [...completed, item[0]];
    return { ...state, completed, names };
  } else return state;
};

//store created
export const store = createStore(todolist);

store.subscribe(() => {
  console.log("state is ", store.getState());
  console.log(initial.names, "heloooooo");
});

//action
export const add = e => {
  return store.dispatch({ type: "add", payload: e });
};

export const del = e => {
  return store.dispatch({ type: "del", payload: e });
};

export const edit = (i, v) => {
  return store.dispatch({ type: "edit", payload: { index: i, newvalue: v } });
};

export const completed = (i, v) => {
  return store.dispatch({ type: "completed", payload: { index: i, value: v } });
};
