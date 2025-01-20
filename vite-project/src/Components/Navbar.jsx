
import "../Styles/NavBar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2>Portfolio</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
