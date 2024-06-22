import React from "react";
import ReactDOM from "react-dom/client";
import StickyNavbar from "./App";

import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import NavbarSimple from "./Navbar";

 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavbarSimple />
    </ThemeProvider>
  </React.StrictMode>
);