import React from "react";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  const routes = [
    { id: 0, path: "/", element: <Home /> },
    { id: 1, path: "/products/:slug", element: <ProductDetail /> },
    { id: 2, path: "/basket", element: <Basket /> },
  ];
  return (
    <Routes>
      {routes.map(({ id, path, element }) => {
        return <Route path={path} element={element} key={id} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
