// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import type { MenuItem } from "../services/MenuService";
import { getMenuItems } from "../services/MenuService";
import DrawerLayout from "./DrawerLayout";
import "../main.css";
import Drawer from "./Drawer";
// import { House, Gear, BoxArrowRight } from "react-bootstrap-icons";

const Navbar: React.FC = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDeviceType("mobile");
        setDrawerOpen(false); // Close drawer by default on mobile
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
        setDrawerOpen(false);
      } else {
        setDeviceType("desktop");
        setDrawerOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const items = getMenuItems();
    setMenuItems(items);
  }, []);

  

  return (
    <>
    <div className={`app-layout ${drawerOpen ? "drawer-open" : "drawer-closed"}`}>

      <main className="app-main">
        <div className="app-navbar d-flex justify-content-between align-items-center">
          <button className="btn btn-link text-white toggle-btn zindex-tooltip" onClick={() => setDrawerOpen(true)} >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="test-dark" className="bi bi-x-diamond-fill" viewBox="0 0 16 16">
                  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z"/>
                </svg>
              </span>
          </button>
          <span className="h5 text-dark">Welcome to Digi Web Cam</span>
          <span className="device-type">: {deviceType === "mobile" && (
            <span className="badge bg-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
          </svg></span>
          )}{deviceType === "tablet" && (
            <span className="badge bg-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tablet-fill" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
          </svg></span>
          )}{deviceType === "desktop" && (
            <span className="badge bg-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-window-desktop" viewBox="0 0 16 16">
            <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
            <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z"/>
          </svg></span>
          )}</span>
        </div>

        <div className="container">
        { <DrawerLayout items={menuItems} />}
          <Routes>
            {menuItems.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <div
                    className="page-content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                }
              />
            ))}

            {menuItems.flatMap((item) =>
              item.subMenu
                ? item.subMenu.map((sub) => (
                    <Route
                      key={sub.path}
                      path={sub.path}
                      element={
                        <div
                          className="page-content"
                          dangerouslySetInnerHTML={{ __html: sub.content }}
                        />
                      }
                    />
                  ))
                : []
            )}
          </Routes>
            <Drawer
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              deviceType={deviceType}
              menuItems={menuItems}
            />
        </div>
      </main>
    </div>
    </>
  );
};

export default Navbar;
