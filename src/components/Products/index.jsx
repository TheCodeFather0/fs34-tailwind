import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import DataNotFound from "../DataNotFound";
import Loader from "../Loader";

const Products = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const count = 6;
  const [pages, setPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + count);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setProducts(data);
        setPages(Math.ceil(data.length / count));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.status === 404) {
          toast.error("backend ilə bağlı xəta!");
        }
      });
  }, []);

  useEffect(() => {
    setStartIndex((activePage - 1) * count);
    setEndIndex(activePage * count);
  }, [activePage]);

  if (isLoading) {
    return <Loader />;
  }

  if (pages) {
  }
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5">
          {products
            .slice(startIndex, endIndex)
            .map(
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
      ) : (
        <DataNotFound />
      )}

      <div className="flex justify-center space-x-2 mt-4">
        {new Array(pages).fill("").map((_, index) => {
          return (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-slate-900 ${
                activePage === index + 1 ? "bg-slate-700" : "bg-slate-400"
              }`}
              onClick={() => {
                setActivePage(index + 1);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
