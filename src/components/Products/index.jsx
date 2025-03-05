import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setProducts(data.products);
    });
  }, []);
  return <div>Products</div>;
};

export default Products;
