import React from "react";

const Header = () => {
  return <nav>
    <div className="nav-wrapper blue">
      <div className='brand-logo'>Demo Project</div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="test">Home</a></li>
        <li><a href="test">About</a></li>
      </ul>
    </div>
  </nav>
};

export default Header;
