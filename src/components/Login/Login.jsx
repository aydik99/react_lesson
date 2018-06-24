import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "Name",
      email: "email"
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit() {
    const { onSubmitForm } = this.props;
    this.setState({
      modal: !this.state.modal
    });
    onSubmitForm(this.state.name, this.state.email);
  }

  handleChangeEmail(e) {
    const { name } = this.state;
    var val = e.target.value;
    this.setState({
      email: val
    });
  }

  handleChangeLogin(e) {
    const { name } = this.state;
    var val = e.target.value;
    this.setState({
      name: val
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Login
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleLogin">Login</Label>
                <Input
                  type="text"
                  name="login"
                  id="examplelogin"
                  value={this.state.name}
                  onChange={this.handleChangeLogin}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
