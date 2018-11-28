import React, { Component } from "react";
import { add } from "./todoreducer.js";
import { del } from "./todoreducer.js";
import { edit } from "./todoreducer.js";
import { completed } from "./todoreducer.js";
import { connect } from "react-redux";

class Items extends Component {
  state = {
    initialname: "",
    editable: false,
    index: ""
  };

  add1 = e => {
    e.preventDefault();
    add(this.state.initialname);
    this.setState({ initialname: "" });
  };
  it;
  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  delete = index => {
    del(index);
  };

  updateItem = eve => {
    eve.preventDefault();
    if (this.input.value.trim().length) {
      edit(this.state.index, this.input.value);
      this.toggleState();
    }
  };

  complete = i => {
    console.log(this.props.value[i], "<<----value  index---->>>", i);
    completed(i, this.props.value[i]);
  };

  toggleState = i => {
    const { editable } = this.state;

    this.setState({
      editable: !editable,
      index: i
    });
  };

  showItems() {
    return (
      <div>
        {this.props.value.length ? (
          this.props.value.map((data, index) => {
            return (
              <div key={index} className="elements">
                <ul
                  onClick={eve => {
                    eve.stopPropagation();
                    this.complete(index);
                  }}
                >
                  {data}
                  <button
                    className="button"
                    id="del_button"
                    onClick={eve => {
                      eve.stopPropagation();
                      this.delete(index);
                    }}
                  >
                    &#10006;
                  </button>
                  <button
                    className="button"
                    onClick={eve => {
                      eve.stopPropagation();
                      this.toggleState(index);
                    }}
                  >
                    &#x270D;
                  </button>
                </ul>
              </div>
            );
          })
        ) : (
          <pre>enter some task</pre>
        )}
      </div>
    );
  }

  form = () => {
    return (
      <form onSubmit={this.updateItem}>
        <input
          type="text"
          ref={value => {
            this.input = value;
          }}
          defaultValue={this.props.value[this.state.index]}
        />
        <button type="submit" id="update">
          update
        </button>
      </form>
    );
  };

  render() {
    var disabled = true;
    if (this.state.initialname.trim()) {
      disabled = false;
    }
    return (
      <div className="row">
        <div>
          <form className="jumbotron" onSubmit={this.add1}>
            <h2>Todo list in Redux</h2>
            <br />
            <br />
            <input
              type="text"
              onChange={this.change}
              value={this.state.initialname}
              name="initialname"
            />
            <button id="update" type="submit" disabled={disabled}>
              Add &#x271A;
            </button>
          </form>
          <div className="col-sm-3 col-md-6 items">
            <h2> Complete these </h2>
            {this.state.editable ? this.form() : this.showItems()}
          </div>
        </div>
        <div className="col-sm-9 col-md-6 items">
          <h2>Completed Task</h2>
          {this.props.complete.length ? (
            this.props.complete.map((datacomp, index) => {
              return (
                <div key={index}>
                  {datacomp}
                  &nbsp;&nbsp; &#10004;
                </div>
              );
            })
          ) : (
            <pre>none task completed Yet</pre>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.names,
    complete: state.completed
  };
};

export default connect(mapStateToProps)(Items);
