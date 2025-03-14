import axios from "axios";
import NotFound from "../NotFound";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import Rating from "../../components/Rating";
import React, { useEffect, useState } from "react";
import DataNotFound from "../../components/DataNotFound";
import UseBasket from "../../Store/Basket";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const url = import.meta.env.VITE_BACKEND_URL;
  const [currentImage, setCurrentImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAddedBasket, setIsAddedBasket] = useState(false);

  const { basket, addNewProduct } = UseBasket();

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const currentElement = data.find((e) => e.slug === slug);
        setProduct(currentElement);
        setCurrentImage(currentElement.images[0]);
        basket.forEach(({ id }) => {
          currentElement.id === id && setIsAddedBasket(true);
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        if (err.status === 404) {
          toast.error("backend ilə bağlı xəta!");
        }
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!product.slug) {
    return <NotFound />;
  }

  const addBasket = () => {
    const data = { ...product, count: 1 };
    addNewProduct(data);
    setIsAddedBasket(true);
  };
  return (
    <>
      <Navbar />

      {product.slug ? (
        <div className="grid grid-cols-2 px-5 gap-16 mt-4">
          <div className="border-2 border-gray-300 p-8 grid grid-cols-[1fr_100px] gap-5">
            <img src={currentImage} />
            <div className="grid grid-cols-[100px] grid-rows-[100px_100px_100px] object-cover gap-3">
              {product.images?.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    className="w-full h-full cursor-pointer"
                    onClick={() => {
                      setCurrentImage(image);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-500">
              {product.title}
            </h2>
            <h2 className="my-3 text-xl">{product.description}</h2>

            <h2 className="text-4xl text-red-500 font-bold">
              {product.price} AZN
            </h2>
            <Rating rating={product.rating} />
            <button
              onClick={addBasket}
              className={`px-4 py-2 rounded-xl text-white mt-4 ${
                isAddedBasket ? "bg-red-600" : "bg-green-600"
              }`}
            >
              Səbətə əlavə {isAddedBasket ? "edilib" : "et"}
            </button>
          </div>
        </div>
      ) : (
        <DataNotFound />
      )}
    </>
  );
};

export default ProductDetail;
