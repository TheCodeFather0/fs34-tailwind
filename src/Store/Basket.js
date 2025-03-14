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
  changeProductCount: (id, o) =>
    set((state) => {
      const currentElement = state.basket.find((p) => p.id === id);

      if (o === "+") {
        currentElement.count += 1;
      } else if (o === "-") {
        if (currentElement.count > 1) {
          currentElement.count -= 1;
        }
      }

      currentElement.totalPrice = currentElement.count * currentElement.price;
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
      return {
        basket: [...state.basket],
      };
    }),
  deleteProductFromBasket: (id) =>
    set((state) => {
      const allProducts = state.basket.filter((p) => p.id !== id);
      localStorage.setItem("basket", JSON.stringify(allProducts));
      return {
        basket: allProducts,
      };
    }),
}));

export default UseBasket;
