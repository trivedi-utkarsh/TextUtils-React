import React from "react";

const Navbar = (props) => {
  let m = props.mode === "light" ? "dark" : "light";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">
          <strong>{props.title}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`form-check form-switch text-${m}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
