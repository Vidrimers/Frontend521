import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    email: "",
  };

  update = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { firstName, email } = this.state;
    return (
      <>
        <hr />
        <form>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.update}
          />
          <input
            name="email"
            type="text"
            value={email}
            onChange={this.update}
          />
        </form>
        <hr />
        <p>{firstName}</p>
        <br />
        <p>{email}</p>
      </>
    );
  }
}

export default Form;
