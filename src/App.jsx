import React from "react";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import { Route, Routes } from "react-router";

const App = () => {
  const routes = [
    { id: 0, path: "/", element: <Home /> },
    { id: 1, path: "/products/:slug", element: <ProductDetail /> },
  ];
  return (
    <Routes>
      {routes.map(({ id, path, element }) => {
        return <Route path={path} element={element} key={id} />;
      })}
    </Routes>
  );
};

export default App;
