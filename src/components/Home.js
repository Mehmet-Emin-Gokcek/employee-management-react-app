import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import DataTable from "./DataTable";
import RegistrationModal from "./form/RegistrationModal";
import { USERS_API_URL } from "../constants";
class Home extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    fetch(USERS_API_URL)
      .then((res) => res.json())
      .then((res) => this.setState({ items: res }))
      .catch((err) => console.log(err));
  };

  addUserToState = (user) => {
    this.setState((previous) => ({
      items: [...previous.items, user],
    }));
  };
  updateState = (id) => {
    this.getItems();
  };
  deleteItemFromState = (id) => {
    const updated = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updated });
  };
  render() {
    let button = "";

    button = (
      <Button
        color="success"
        onClick={this.getItems()}
        style={{ minWidth: "200px" }}
      >
        {" "}
        All Employees{" "}
      </Button>
    );

    return (
      <Container style={{ paddingTop: "20px" }}>
        {button}
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RegistrationModal
              isNew={true}
              addUserToState={this.addUserToState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
