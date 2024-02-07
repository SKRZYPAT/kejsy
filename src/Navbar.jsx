import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  const startAnimation = () => {
    const logoIcon = document.querySelector(".logo-icon");
    logoIcon.classList.add("rotate");
    setTimeout(() => {
      logoIcon.classList.remove("rotate");
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <Link className="logo" onMouseEnter={() => startAnimation()} to="/">
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
          <div
            className="dropdown-button"
            onClick={() => setDropdown(!dropdown)}
            onMouseEnter={() => {
              setDropdownHover(true);
            }}
            onMouseLeave={() => {
              setDropdownHover(false);
            }}
          >
            {/*<img
              className="dropdown-icon"
              src={dropdown ? "close-dropdown.svg" : "open-dropdown.svg"}
              draggable="false"
            />*/}
            <svg
              className="dropdown-icon"
              draggable="false"
              style={{
                fill: dropdownHover ? "#fca311" : "#000000",
                transition: "fill 0.15s ease",
              }}
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {dropdown ? (
                <path d="M 37.868 37.868 C 47.631 28.105 63.46 28.105 73.223 37.868 L 462.132 426.777 C 471.895 436.54 471.895 452.369 462.132 462.132 C 452.369 471.895 436.54 471.895 426.777 462.132 L 37.868 73.223 C 28.105 63.46 28.105 47.631 37.868 37.868 Z M 462.132 37.868 C 471.895 47.631 471.895 63.46 462.132 73.223 L 73.223 462.132 C 63.46 471.895 47.631 471.895 37.868 462.132 C 28.105 452.369 28.105 436.54 37.868 426.777 L 426.777 37.868 C 436.54 28.105 452.369 28.105 462.132 37.868 Z" />
              ) : (
                <>
                  <rect x="0" y="225" width="500" height="50" rx="25" ry="25" />
                  <rect y="400" width="500" height="50" rx="25" ry="25" />
                  <rect width="500" height="50" rx="25" ry="25" y="50" />
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
      <div className={`dropdown ${dropdown ? "visible" : ""}`}>
        <Link className="dropdown-link" to="/about">
          Poznaj nas!
        </Link>
        <Link className="dropdown-link" to="/contact">
          Kontakt
        </Link>
      </div>
    </>
  );
};

export default Navbar;
