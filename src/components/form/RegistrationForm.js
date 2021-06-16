import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { USERS_API_URL } from "../../constants";
class RegistrationForm extends React.Component {
  state = {
    id: 0,
    name: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
  };
  componentDidMount() {
    if (this.props.user) {
      const { id, name, email, dob, address, phone } = this.props.user;
      this.setState({ id, name, email, dob, address, phone });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitNew = (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        address: this.state.address,
        phone: this.state.phone,
      })
    );
    fetch(USERS_API_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        address: this.state.address,
        phone: this.state.phone,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        this.props.toggle();
        this.props.addUserToState(user);
      })
      .catch((err) => console.log(err));
  };

  submitEdit = (e) => {
    e.preventDefault();
    fetch(`${USERS_API_URL}/${this.state.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        address: this.state.address,
        phone: this.state.phone,
      }),
    })
      .then(() => {
        this.props.toggle();
        this.props.updateUserIntoState(this.state.id);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name === "" ? "" : this.state.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email === "" ? "" : this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Date of Birth:</Label>
          <Input
            type="text"
            name="dob"
            onChange={this.onChange}
            value={this.state.dob === "" ? "" : this.state.dob}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.state.address === "" ? "" : this.state.address}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.state.phone === "" ? "" : this.state.phone}
            placeholder="(999) 999-9999"
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}
export default RegistrationForm;
