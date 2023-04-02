import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import DetailView from "./routes/DetailView";
import Layout from "./routes/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route
            index={false}
            path="/coinDetails/:symbol"
            element={<DetailView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
