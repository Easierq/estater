import "./navbar.scss";

import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import menu from "../../icons/menu.svg";
import menuwhite from "../../icons/menu-white.svg";
import close from "../../icons/close.svg";
// import { ReactComponent as Menu } from "../../icons/menu.svg";

// const Icon = () => {
//   return <Menu className="menu-icon" />;
// };

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = { username: "isiaq", avatar: "" };
  const currentUser = true;
  const admin = true;
  // const number = 4;

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  let sideBar = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!sideBar.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  });

  return (
    // <nav className="navbar">
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="left">
          <a href="/" className="logo">
            {/* <img src="/logo.png" alt="" /> */}
            <span
              className={active || pathname !== "/" ? "span active" : "span"}
            >
              Estater
            </span>
          </a>
        </div>
        <div className="right">
          <div className="links">
            <a
              className={active || pathname !== "/" ? "a active" : "a"}
              href="/properties"
            >
              Properties
            </a>
            <a
              className={active || pathname !== "/" ? "a active" : "a"}
              href="/contact"
            >
              Contact
            </a>
            <a
              className={active || pathname !== "/" ? "a active" : "a"}
              href="/saved"
            >
              Saved
            </a>
            {admin && (
              <div>
                <Link
                  as={NavLink}
                  to="/add-property"
                  className={
                    active || pathname !== "/"
                      ? "add-button active"
                      : "add-button"
                  }
                >
                  <span>Add listing</span>
                </Link>
              </div>
            )}
            {currentUser ? (
              <div>
                <Link as={NavLink} to="/profile" className="user">
                  <img src="/nouser.jpg" alt="" />
                  <span>Wale</span>
                </Link>
              </div>
            ) : (
              <>
                <a href="/login" className="login-button">
                  Login
                </a>
                <a href="/register" className="register-button">
                  Register
                </a>
              </>
            )}
          </div>
          <div className="menuIcon">
            {active || pathname !== "/" ? (
              <img
                // src="../../icons/menu.svg"
                src={menu}
                alt="menu-icon"
                onClick={() => setOpen((prev) => !prev)}
              />
            ) : (
              <img
                // src="../../icons/menu.svg"
                src={menuwhite}
                alt="menu-icon"
                onClick={() => setOpen((prev) => !prev)}
              />
            )}

            {/* <Icon className="menu-icon" /> */}
          </div>
          <div
            className={open ? "menu active" : "menu"}
            // onClick={() => setOpen((prev) => !prev)}
          >
            <div className="inner-menu" ref={sideBar}>
              <img
                className="close"
                src={close}
                alt="menu-icon"
                onClick={() => setOpen((prev) => !prev)}
              />
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/register">Register</a>
              <a href="/login">Login</a>
              <a href="/profile">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
