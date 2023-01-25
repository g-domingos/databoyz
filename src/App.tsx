import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import { Router } from "./Router";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
