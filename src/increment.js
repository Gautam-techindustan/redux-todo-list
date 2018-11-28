import React, { Component } from "react";
import { add } from "./reducer";
import { sub } from "./reducer";
import { connect } from "react-redux";

class Increment extends Component {
  state = {};
  add1 = () => {
    add();
  };

  sub1 = () => {
    sub();
  };
  render() {
    return (
      <div>
        {this.props.value}

        <button onClick={this.add1}>Add</button>
        <button onClick={this.sub1}>Sub</button>
      </div>
    );
  }
}

let mapPropsToState = state => {
  console.log("incremnt vLUE", state);
  return {
    value: state
  };
};

export default connect(mapPropsToState)(Increment);
