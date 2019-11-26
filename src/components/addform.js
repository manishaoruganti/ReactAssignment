import React, { Component } from "react";
//import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
     quantity: "",
      price: "",
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (
      this.state.title === "" ||
      this.state.quantity === "" ||
      this.state.price === ""
    ) {
      alert("All fields are Mandatory");
    } else {
      fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: this.state.title,
          quantity: this.state.quantity,
          price: this.state.price,
          
        })
      })
      alert("prooducts Added Successfully");
    }
  }
  render() {
    return (
      <div className="container col-8">
        <Form>
          <FormGroup>
            <Label htmlFor="title">Product name</Label>

            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the product name"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <div>
              <Label htmlFor="quantity">quantity </Label>
              <Input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter the quantity "
              value={this.state.quantity}
              onChange={this.handleInputChange}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <Label htmlFor="price">Price </Label>
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Enter the Price "
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>
          </FormGroup>

          
          <FormGroup>
            <div>
              <Button type="submit" color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default AddForm;
