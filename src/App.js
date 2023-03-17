import React from "react";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import privateRoutes from "./routes/PrivateRoutes";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        {privateRoutes.map(({ element: Element, path }) => (
          <Route key={path} element={<Element />} path={path} />
        ))}
      </Routes>
      <Link
        to="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
      <div id="preloader"></div>
    </Layout>
  );
};

export default App;
