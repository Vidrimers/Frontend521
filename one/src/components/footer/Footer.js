import React from "react";

class Footer extends React.Component {
  render() {
    let { text } = this.props;
    return (
      <footer
        style={{
          backgroundColor: "#a51717ff",
          color: "#fff",
          padding: "10px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <p>{text}</p>
      </footer>
    );
  }
}

export default Footer;
