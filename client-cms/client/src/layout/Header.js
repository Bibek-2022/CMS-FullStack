import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../pages/login/loginAction";
import "./header.css";
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

  // let headerClass =
  //   "navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bold custom";
  // if (scrollPosition > 900) {
  //   headerClass =
  //     "navbar fixed-top navbar-expand-lg bg-light color-black shadow";
  // }
  return (
    // <nav className={headerClass}>
    // <nav className="navbar fixed-top navbar-expand-lg bg-light color-black shadow">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       Shop Me
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <div className="mx-auto"></div>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link">
    //             Home{" "}
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/products" className="nav-link">
    //             Product{" "}
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Blog
    //           </a>
    //         </li>
    //         {/* <li className="nav-item">
    //           <Link to="/login" className="nav-link">
    //             Login{" "}
    //           </Link>
    //         </li> */}

    //         {user?._id ? (
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               {"Welcome " + users?.fName}
    //             </a>
    //           </li>
    //         ) : (
    //           <li className="nav-item">
    //             <Link to="/login" className="nav-link">
    //               Login{" "}
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
        <div class="container">
          <a class="navbar-brand" href="#!">
            <span className="aa">The</span>
            <span className="aaa">Shop</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  Product
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#!">
                  Contact
                </a>
              </li>
            </ul> */}
            {/* start */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>Home </strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Product{" "}
                </Link>
              </li>
            </ul>
            {/* end */}

            <ul class="navbar-nav d-flex flex-row">
              {user?._id ? (
                <li className="nav-item d-block">
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

              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#!">
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#!">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
