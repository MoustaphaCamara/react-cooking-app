import React, { useEffect } from "react";
import Recipes from "./Recipes";
import axios from "axios";
import { useState } from "react";

const Meals = () => {
  const [dataRecipe, setDataRecipe] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setDataRecipe(res.data.meals));
  }, [search]);

  return (
    <div className="meals">
      <h2>List of recipes</h2>
      <input
        type="text"
        placeholder="Enter any ingredient ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipe-container">
        {dataRecipe &&
          dataRecipe.map((recipe, index) => (
            <Recipes key={index} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Meals;
