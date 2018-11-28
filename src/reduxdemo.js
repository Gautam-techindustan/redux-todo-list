import React, { Component } from "react";
import { createStore } from "redux";

class Reduxdemo extends Component {
  render() {
    //step 2 create reducer:state and action
    const reducer = function(state = [], action) {
      if (action.type === "attack") {
        return action.payload;
      }
      return state;
    };
    //step 1 create store:reducer and state
    const store = createStore(reducer, "peace");

    //step 3 suscribe
    store.subscribe(() => {
      console.log("store is now ", store.getState());
    });

    //step 4 dispatch action
    store.dispatch({ type: "attack", payload: "hulk" });

    return;
  }
}

export default Reduxdemo;
