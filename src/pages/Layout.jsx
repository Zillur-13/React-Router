


import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Menu Bar */}

      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/" style={({ isActive }) => ({ margin: "0 10px", fontWeight: isActive ? "bold" : "normal",  color: isActive ? "blue" : "black",  textDecoration: "none" })}> Home </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({  margin: "0 10px", fontWeight: isActive ? "bold" : "normal",  color: isActive ? "blue" : "black",textDecoration: "none" })} >About</NavLink>
        <NavLink  to="/contact" style={({ isActive }) => ({  margin: "0 10px", fontWeight: isActive ? "bold" : "normal",color: isActive ? "blue" : "black", textDecoration: "none" })} > Contact </NavLink>
      </nav>

      {/* Dynamic Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: "10px", borderTop: "1px solid #ccc", marginTop: "20px" }}>
        &copy; 2026 My Website
      </footer>
    </div>
  );
}


export default Layout