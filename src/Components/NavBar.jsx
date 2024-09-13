import React from "react";

function NavBar({ onCategoryChange, onCountryChange }) {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    event.preventDefault();
  };

  const handleCountryChange = (event) => {
    onCountryChange(event.target.value);
    event.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top p-3">
      <div className="container-fluid">
        <span className="navbar-brand badge text-bg-secondary">News Time</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#business"
                onClick={() => handleCategoryClick("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#entertainment"
                onClick={() => handleCategoryClick("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sports"
                onClick={() => handleCategoryClick("sports")}
              >
                Sports
              </a>
            </li>
            
          </ul>
        </div>
        <li className="nav-item d-flex ms-auto">
              <select className="form-select" onChange={handleCountryChange}>
                <option value="us">US</option>
                <option value="in">India</option>
                <option value="gb">UK</option>
              </select>
            </li>
      </div>
    </nav>
  );
}

export default NavBar;
