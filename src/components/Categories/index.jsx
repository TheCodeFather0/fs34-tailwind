import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const url = import.meta.env.VITE_CATEGORIES_URL;

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="mt-5">
      <div
        className={`text-white p-2 mb-2 cursor-pointer ${
          activeCategory === "All" ? "bg-slate-700" : "bg-slate-500"
        }`}
        onClick={() => setActiveCategory("All")}
      >
        All
      </div>
      {categories.map(({ id, name }) => {
        return (
          <div
            key={id}
            className={`text-white p-2 mb-2 cursor-pointer ${
              activeCategory === name ? "bg-slate-700" : "bg-slate-500"
            }`}
            onClick={() => setActiveCategory(name)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
