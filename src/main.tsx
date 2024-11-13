import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./chrome-extension/global.css";
import { Popup } from "./chrome-extension/popup/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white w-[500px] ">
      <Popup />
    </div>
  </StrictMode>
);
