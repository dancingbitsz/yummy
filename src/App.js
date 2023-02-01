import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import privateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <Layout>
      <Routes>
        {privateRoutes.map(({ element: Element, path }) => (
          <Route key={path} element={<Element />} path={path} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
