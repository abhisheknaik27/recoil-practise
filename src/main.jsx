import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./contextApi/App.jsx";
import App from "./router-lazy-suspense/App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
