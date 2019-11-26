import React, { Component } from "react";
import AddForm from "./addform";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid addpage" >
        <div className="container mt-3">
          <h3>Add product Details</h3>
        </div>
        <div>
          <AddForm />
        </div>
      </div>
    );
  }
}

export default Add;
