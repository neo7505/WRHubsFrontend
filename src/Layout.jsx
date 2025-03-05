import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Navbar } from "./components/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar className="navbar" />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
