import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import RealEstate from "./RealEstate.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RealEstate />
  </StrictMode>,
);
