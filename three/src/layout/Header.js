import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrap">
        <div className="logo">video</div>
        <div className="right">
          <div className="tel">+1 234 567 890</div>
          <div className="email">video@example.com</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
