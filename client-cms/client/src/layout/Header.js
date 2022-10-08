import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../pages/login/loginAction";
export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [users, setUsers] = useState([]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // !user.length && dispatch(loginAction());
    !users.length && setUsers(user);
  }, [user]);
  console.log(users);
  console.log(user);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  let headerClass =
    "navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bold custom";
  if (scrollPosition > 900) {
    headerClass =
      "navbar fixed-top navbar-expand-lg bg-light color-black shadow";
  }
  return (
    <nav className={headerClass}>
      <div className="container">
        <a className="navbar-brand" href="#">
          Shop Me
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Product{" "}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login{" "}
              </Link>
            </li> */}

            {user?._id ? (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {"Welcome " + users?.fName}
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login{" "}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
