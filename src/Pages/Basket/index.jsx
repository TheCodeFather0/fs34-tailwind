import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import UseBasket from "../../Store/Basket";
import Navbar from "../../components/Navbar";

const Basket = () => {
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const { basket, changeProductCount, deleteProductFromBasket } = UseBasket();

  useEffect(() => {
    let sum = 0;
    basket.forEach(({ totalPrice }) => {
      sum += totalPrice;
    });
    setBasketTotalPrice(sum);
  }, [basket]);

  const deleteProduct = (id) => {
    const isAgree = confirm("eminsen?");
    if (isAgree) {
      deleteProductFromBasket(id);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-5">
        <h2 className="text-5xl font-bold mt-8 mb-8">My Basket</h2>
        {!basket.length ? (
          <p className="text-red-500 text-2xl">Basket is empty</p>
        ) : (
          <>
            {basket.map(
              ({
                id,
                images,
                title,
                description,
                price,
                count,
                totalPrice,
              }) => {
                return (
                  <div
                    key={id}
                    className="grid grid-cols-[1fr_4fr] gap-8 border-2 border-gray-300 p-2 my-4"
                  >
                    <div>
                      <img
                        src={images[0]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-slate-500">
                        {title}
                      </h2>
                      <h2 className="my-3 text-xl">{description}</h2>

                      <h2 className="text-4xl text-red-500">{price} AZN</h2>

                      <div className="my-4 flex gap-2 items-center">
                        <button
                          onClick={() => changeProductCount(id, "-")}
                          className="bg-slate-500 text-white w-[40px] h-[40px] rounded-full hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 flex justify-center items-center font-bold text-xl cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-3xl">{count}</span>
                        <button
                          onClick={() => changeProductCount(id, "+")}
                          className="bg-slate-500 text-white w-[40px] h-[40px] rounded-full hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 flex justify-center items-center font-bold text-xl cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <p className="text-red-500 text-3xl font-bold">
                          Total Price: {totalPrice} AZN
                        </p>
                        <div>
                          <FaTrash
                            className="text-5xl text-red-500 cursor-pointer"
                            onClick={() => deleteProduct(id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </>
        )}

        {!!basket.length && (
          <>
            <div>Total Price: {basketTotalPrice} AZN</div>
            <button>Buy Products!</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
