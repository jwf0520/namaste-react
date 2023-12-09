import React from "react";
import reactDom from "react-dom/client";

import App from "./AppFcn";

const root = reactDom.createRoot(document.getElementById("root")!);

root.render(<App />);
