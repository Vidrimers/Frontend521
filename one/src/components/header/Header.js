import logo from "./logo.svg";
import "./Header.css";

function Header(props) {
  let {title, slog} = props;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>

      <p>
        Edit <code>src/App.js</code> and save to reload. приветики
      </p>
      <p>123456789Далеко-далеко за словесными горами в стране.</p>
      <p>{slog}</p>
    </header>
  );
}

export default Header;
