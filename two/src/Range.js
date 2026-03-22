import React from "react";
import "./Range.css";

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "120",
    };
  }

  range = (event) => {
    this.setState({
      val: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <br />
        <p>Выберите размер квадрата:</p>
        <input type="range" onInput={this.range} min="0" max="240" step={10} />
        <p>
          {this.state.val}px * {this.state.val}px
        </p>
        <div
          className="square"
          style={{
            width: this.state.val + "px",
            height: this.state.val + "px",
            backgroundColor: "#0b79f8",
            margin: "0 auto",
          }}
        ></div>
      </div>
    );
  }
}

export default Range;
