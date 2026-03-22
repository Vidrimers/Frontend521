import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  фвв = () => {
    let val = this.state.count;
    val++
    this.setState({
      count: val
    })
  }

  render() {
    console.log("render");

    return (
      <>
     {
     console.log("return")
     }
  <div>
    <button onClick={this.add}>Добавить</button>
  </div>
  <div>
    {
      this.state.count
    }
  </div>
  </>
  )
}

export default Test;
