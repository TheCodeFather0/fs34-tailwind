import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Categories from "../../components/Categories";

const Home = () => {
  const [searchedText, setSearchedText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar searchedText={searchedText} setSearchedText={setSearchedText} />
      <div className="px-5 grid grid-cols-[200px_1fr]">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Products
          searchedText={searchedText}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </>
  );
};

export default Home;
