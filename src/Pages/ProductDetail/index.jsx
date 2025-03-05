import axios from "axios";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import Rating from "../../components/Rating";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const url = "http://localhost:3000/products";
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      const currentElement = data.find((e) => e.slug === slug);
      setProduct(currentElement);
      setCurrentImage(currentElement.images[0]);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 px-5 gap-16 mt-4">
        <div className="border-2 border-gray-300 p-8 grid grid-cols-[1fr_100px] gap-5">
          <img src={currentImage} />
          <div className="grid grid-cols-[100px] grid-rows-[100px_100px_100px] object-cover gap-3">
            {product.images?.map((image) => {
              return (
                <img
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
          <h2 className="text-4xl font-bold text-slate-500">{product.title}</h2>
          <h2 className="my-3 text-xl">{product.description}</h2>

          <h2 className="text-4xl text-red-500 font-bold">
            {product.price} AZN
          </h2>
          <Rating rating={product.rating} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
