import React, { Component } from "react";

class SmurfForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="name" />
          <input placeholder="age" />
          <input placeholder="height" />
          <button type="submit">Add to Village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
