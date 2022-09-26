import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Phones, Brands, Error } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div className="container align-self-center">
            <Link className="h2" to="/telephones">
              Telephones
            </Link>
          </div>
        </nav>
        <div className="container content">
          <Routes>
            <Route path="/" element={<Navigate to="/phones" />} />
            <Route path="/telephones" element={<Brands />}></Route>
            <Route path="/telephones/:brand" element={<Phones />}></Route>
            <Route path="/error" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
