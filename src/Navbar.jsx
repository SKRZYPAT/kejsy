import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const startAnimation = () => {
    const logoIcon = document.querySelector(".logo-icon");
    logoIcon.classList.add("rotate");
    setTimeout(() => {
      logoIcon.classList.remove("rotate");
    }, 500);
  };

  return (
    <div className="navbar">
      <Link className="logo" onMouseOver={() => startAnimation()} to="/">
        <img className="logo-icon" src="/case-icon.svg" draggable="false" />
        Kejsy
      </Link>
      <div className="links">
        <Link className="link" to="/about">
          Poznaj nas!
        </Link>
        <Link className="link" to="/contact">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
