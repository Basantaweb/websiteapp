// src/services/MenuService.ts

export interface MenuItem {
    path: string;
    label: string;
    content: string;
    subMenu?: MenuItem[];
  }
  
  // Simulate fetching menu items from a JSON source or API
  export const getMenuItems = (): MenuItem[] => [
        {
            path: "/",
            label: "Home",
            content: `<h1 class="display-5 mb-2">Welcome to Digital Web App CCtv Camera Hardware Software Market</h1>
                      <p class="lead text-muted">Your destination for digital products, electronics, and development services.</p>`,
          },
          {
            path: "/shop",
            label: "Shop",
            content: `<h2 class="h4 mb-4">Our Products</h2>
                      <ul class="sub-list-group-horizontal list-group">
                        <li class="list-group-item"><div class="border p-3 rounded shadow">Security Camera</div></li>
                        <li class="list-group-item"><div class="border p-3 rounded shadow">Projector</div></li>
                        <li class="list-group-item"><div class="border p-3 rounded shadow">Smart Device</div></li>
                      </ul>`,
                      subMenu: [
                        { path: "/shop/cameras", label: "Cameras", content: "<p>Camera details</p>" },
                        { path: "/shop/projectors", label: "Projectors", content: "<p>Projector details</p>" },
                      ],
          },
          {
            path: "/services",
            label: "Services",
            content: `<h2 class="h4 mb-4">Our Services</h2>
                      <ul class="sub-list-group-horizontal list-group">
                        <li class="list-group-item">Website Development</li>
                        <li class="list-group-item">App Development</li>
                        <li class="list-group-item">Device Installation</li>
                        <li class="list-group-item">Custom Software Projects</li>
                      </ul>`,
          },
          {
            path: "/projects",
            label: "Projects",
            content: `<h2 class="h4 mb-4">Project Ideas</h2>
                      <ul class="sub-list-group-horizontal list-group">
                        <li class="list-group-item">Smart Home Integration</li>
                        <li class="list-group-item">Live CCTV Feed Portal</li>
                        <li class="list-group-item">Remote Projector Control App</li>
                        <li class="list-group-item">Maintenance Alert System</li>
                      </ul>`,
          },
          {
            path: "/contact",
            label: "Contact",
            content: `<h2 class="h4 mb-4">Contact Us</h2>
                      <p>Email: admin@digiwebcam.in</p>
                      <p>Phone: +91-XXXXXXXXXX</p>`,
          },
          {
            path: "/about",
            label: "About",
            content: `<h2 class="h4 mb-4">About Us</h2>
                      <p>We are a leading provider of digital products and services, specializing in CCTV cameras, projectors, and smart devices. Our mission is to deliver high-quality solutions that enhance security and convenience for our customers.</p>`,
          },
          {
            path: "/privacy",
            label: "Privacy Policy",
            content: `<h2 class="h4 mb-4">Privacy Policy</h2>
                      <p>We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.</p>
                      <h3 class="h5">Information Collection</h3>
                      <p>We collect information when you visit our site, place an order, subscribe to our newsletter, or interact with us in other ways.</p>
                      <h3 class="h5">Use of Information</h3>
                      <p>Your information helps us to process transactions, improve our website, and provide better customer service.</p>`
          },
          {
            path: "/terms",
            label: "Terms of Service",
            content: `<h2 class="h4 mb-4">Terms of Service</h2>
                      <p>By using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.</p>
                      <h3 class="h5">Use of Site</h3>
                      <p>We grant you a limited license to access and make personal use of this site. You may not download (other than page caching) or modify it, or any portion of it, without express written consent.</p> 
                      <h3 class="h5">User Accounts</h3>
                      <p>When you create an account on our site, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.</p>
                      <h3 class="h5">Limitation of Liability</h3>
                      <p>In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from the use of our site or services.</p>`
          },
          {
            path: "/login",
            label: "Login",
            content: `<h2 class="h4 mb-4">Login</h2>
                      <form>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="mb-3">
                          <label for="password" class="form-label">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                      </form>
                      <p class="mt-3">Don't have an account? <a href="/register">Register here</a></p>`,
          },
          { path: "/register",
            label: "Register",
            content: `<h2 class="h4 mb-4">Register</h2>
                      <form>
                        <div class="mb-3">
                          <label for="username" class="form-label">Username</label>
                          <input type="text" class="form-control" id="username" placeholder="Enter username">
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="mb-3">
                          <label for="password" class="form-label">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                        <div class="mb-3">
                          <label for="confirmPassword" class="form-label">Confirm Password</label>
                          <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                      </form>
                      <p class="mt-3">Already have an account? <a href="/login">Login here</a></p>`,
          },
          { path: "/forgot-password",
            label: "Forgot Password",
            content: `<h2 class="h4 mb-4">Forgot Password</h2>
                      <form>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <button type="submit" class="btn btn-primary">Reset Password</button>
                      </form>
                      <p class="mt-3">Remembered your password? <a href="/login">Login here</a></p>`,
          },
    ];
  