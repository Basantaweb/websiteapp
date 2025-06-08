import React from "react";
import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
  path: string;
  subMenu?: {
    label: string;
    path: string;
  }[];
};

type DrawerProps = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  deviceType: "mobile" | "tablet" | "desktop";
  menuItems: MenuItem[];
};

const Drawer: React.FC<DrawerProps> = ({
  drawerOpen,
  setDrawerOpen,
  deviceType,
  menuItems,
}) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`app-drawer ${drawerOpen ? "open" : "closed"}`}>
      <div className="drawer-header d-flex justify-content-between align-items-center p-3 border-bottom">
        <div className="navbar-title">
          <img
            className="main-logo"
            src="https://digiwebcam.in/webaccess/design/img/logo1.png"
            alt={deviceType}
            style={{ maxHeight: "40px" }}
          />
        </div>
        
          <button
            type="button"
            className="btn btn-sm btn-outline-dark drawer-close"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
     
      </div>

      <nav className="drawer-menu p-3">
        {menuItems.map((item) => (
          <div key={item.path} className="mb-2">
            <Link
              to={item.path}
              className={`drawer-link d-block mb-1 ${isActive(item.path) ? "active fw-bold" : ""}`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>

            {item.subMenu && (
              <div className="drawer-submenu ps-3">
                {item.subMenu.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className={`drawer-sublink d-block mb-1 ${isActive(sub.path) ? "active fw-semibold" : ""}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Drawer;
