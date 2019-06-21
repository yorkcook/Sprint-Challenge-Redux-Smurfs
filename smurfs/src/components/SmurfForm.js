import React, { Component } from "react";
import { addSmurf } from "../actions/index";
import { connect } from "react-redux";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  addNewSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({ ...this.state });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNewSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
