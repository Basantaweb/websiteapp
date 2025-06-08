// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getMenuItems, type MenuItem } from "./services/MenuService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);

  const allRoutes = menuItems.flatMap((item) =>
    item.subMenu ? [item, ...item.subMenu] : [item]
  );

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {allRoutes.map((item) => (
          <Route key={item.path} path={item.path} />
        ))}
      </Routes>
    </Router>
    </>
  );
};

export default App;

