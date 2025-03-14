import { create } from "zustand";

const UseBasket = create((set) => ({
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  addNewProduct: (product) =>
    set((state) => {
      const newBasket = [product, ...state.basket];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        basket: newBasket,
      };
    }),
}));

export default UseBasket;
