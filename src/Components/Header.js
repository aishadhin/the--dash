import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 bg-blue">
      <div>
        <ul className="flex justify-between">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link className="pr-5" to="/login">
              Login
            </Link>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
