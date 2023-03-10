import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import "./Navbar.css";

function Navbar() {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Blog</h1>{" "}
        </Link>

        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div className="navbar">
            <Link to="/signup"> Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
