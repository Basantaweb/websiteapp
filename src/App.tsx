import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => (
  <>
    <nav className="navbar bg-dark navbar-dark px-3">
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileDrawer"
        aria-controls="mobileDrawer"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <span className="navbar-brand ms-2">Welcome to Digi Web Cam</span>
    </nav>

    {/* Desktop Navigation */}
    <div className="d-none d-sm-flex bg-dark text-white justify-content-center gap-4 py-2">
      <NavLink to="/" className={({ isActive }) => "text-white text-decoration-none" + (isActive ? " fw-bold" : "")}>Home</NavLink>
      <NavLink to="/shop" className={({ isActive }) => "text-white text-decoration-none" + (isActive ? " fw-bold" : "")}>Shop</NavLink>
      <NavLink to="/services" className={({ isActive }) => "text-white text-decoration-none" + (isActive ? " fw-bold" : "")}>Services</NavLink>
      <NavLink to="/projects" className={({ isActive }) => "text-white text-decoration-none" + (isActive ? " fw-bold" : "")}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => "text-white text-decoration-none" + (isActive ? " fw-bold" : "")}>Contact</NavLink>
    </div>

    {/* Mobile Drawer */}
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="mobileDrawer"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-2">
         <NavLink to="/" className={({ isActive }) => " text-decoration-none" + (isActive ? " fw-bold" : "")}>Home</NavLink>
      <NavLink to="/shop" className={({ isActive }) => " text-decoration-none" + (isActive ? " fw-bold" : "")}>Shop</NavLink>
      <NavLink to="/services" className={({ isActive }) => " text-decoration-none" + (isActive ? " fw-bold" : "")}>Services</NavLink>
      <NavLink to="/projects" className={({ isActive }) => " text-decoration-none" + (isActive ? " fw-bold" : "")}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => " text-decoration-none" + (isActive ? " fw-bold" : "")}>Contact</NavLink>
      </div>
    </div>
  </>
);

const Home = () => (
  <div className="container p-4 text-center">
    <h1 className="display-4 mb-3">Welcome to Digi Web Cam</h1>
    <p className="lead">Your destination for digital products, electronics, and development services.</p>
  </div>
);

const Shop = () => (
  <div className="container p-4">
    <h2 className="h4 mb-3">Our Products</h2>
    <div className="row">
      <div className="col-md-4 mb-3"><div className="card p-3 shadow">Security Camera</div></div>
      <div className="col-md-4 mb-3"><div className="card p-3 shadow">Projector</div></div>
      <div className="col-md-4 mb-3"><div className="card p-3 shadow">Smart Device</div></div>
    </div>
  </div>
);

const Services = () => (
  <div className="container p-4">
    <h2 className="h4 mb-3">Our Services</h2>
    <ul className="list-group">
      <li className="list-group-item">Website Development</li>
      <li className="list-group-item">App Development</li>
      <li className="list-group-item">Device Installation</li>
      <li className="list-group-item">Custom Software Projects</li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="container p-4">
    <h2 className="h4 mb-3">Project Ideas</h2>
    <ul className="list-group">
      <li className="list-group-item">Smart Home Integration</li>
      <li className="list-group-item">Live CCTV Feed Portal</li>
      <li className="list-group-item">Remote Projector Control App</li>
      <li className="list-group-item">Maintenance Alert System</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="container p-4">
    <h2 className="h4 mb-3">Contact Us</h2>
    <p>Email: support@digitalmarket.com</p>
    <p>Phone: +91-XXXXXXXXXX</p>
  </div>
);

const App: React.FC = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setDeviceType("mobile");
      else if (window.innerWidth < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="text-center mt-2">
        <span className="badge bg-secondary">Device: {deviceType}</span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
