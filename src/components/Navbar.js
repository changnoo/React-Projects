import logo from "../react.png";

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={logo} alt="react-logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
