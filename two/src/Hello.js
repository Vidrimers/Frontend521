import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello", // false
    };
  }

  changeText = () => {
    this.setState((state) => ({ text: !state.text }));
  };
  // resetText = () => {
  //   this.setState({
  //     text: 'Hello'
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={this.changeText}>Заменить</button>
        {/* <button onClick={this.resetText}>Сбросить</button> */}

        <p>{this.state.text ? "Приветики" : "Hello"}</p>
      </div>
    );
  }
}

export default Hello;
