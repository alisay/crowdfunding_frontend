import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;