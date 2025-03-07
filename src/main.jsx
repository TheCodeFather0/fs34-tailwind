import { BrowserRouter } from "react-router";
import "./App.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="top-right" />
    <App />
  </BrowserRouter>
);
