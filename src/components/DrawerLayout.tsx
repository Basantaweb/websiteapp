import React, { useState } from "react";
import { Link } from "react-router-dom";

type DrawerItem = {
  path: string;
  label: string;
  icon?: string;
  subMenu?: DrawerItem[];
};

type DrawerLayoutProps = {
  items: DrawerItem[];
};

const DrawerLayout: React.FC<DrawerLayoutProps> = ({ items }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (path: string) => {
    setOpenMenu(openMenu === path ? null : path);
  };

  return (
    <>
    <div className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll-menu">
        {items.map((item) => (
          <div key={item.path} className="menu-item">
            <div
              className="menu-link-wrapper"
              onClick={() => {
                if (item.subMenu) toggleSubMenu(item.path);
              }}
            >
              <Link to={item.path} className="menu-link">
                {item.icon && (
                  <i className={`icon-${item.icon}`} style={{ marginRight: "5px" }}></i>
                )}
                {item.label}
              </Link>
            </div>

            {item.subMenu && (
              <div
                className={`submenu ${
                  openMenu === item.path ? "submenu-open" : ""
                }`}
              >
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className="submenu-link"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default DrawerLayout;
