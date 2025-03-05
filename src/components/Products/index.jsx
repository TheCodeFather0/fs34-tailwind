import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Products = () => {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5">
      {products.map(
        ({ id, title, images, price, category, description, slug }) => {
          return (
            <div
              key={id}
              className="border-1 border-gray-300 relative rounded-md"
            >
              <div
                alt={title}
                className="object-con w-full h-[200px] rounded-tl-md rounded-tr-md bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${images[0]})` }}
              />
              <div className="p-2">
                <h2 className="truncate font-bold">{title}</h2>
                <h2 className="absolute top-2 right-2 bg-red-300 px-2 py-0.5 text-sm rounded-md">
                  {category.name}
                </h2>
                <h2 className="my-2 line-clamp-2">{description}</h2>
                <h2 className="truncate text-red-700 text-2xl font-bold">
                  {price} AZN
                </h2>
              </div>
              <Link
                to={"/products/" + slug}
                className="absolute inset-0"
              ></Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Products;
