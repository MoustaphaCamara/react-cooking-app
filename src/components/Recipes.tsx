import React from "react";

const Recipes = ({ recipe }: { recipe: any }) => {
  function showDesc(e: any) {
    // faire une nouvelle div "modale" qu'on va rajouter au dom et dedans je rajoute recipe.strinstructions
    let description = e.target.previousElementSibling;
    console.log(description);
    description.classList.add("show-description");
    description.addEventListener("click", () => {
      description.classList.remove("show-description");
    });
  }
  return (
    <div className="recipe">
      <h3 className="recipe-title">{recipe.strMeal}</h3>
      <p className="recipe-origin">Origin : {recipe.strArea}</p>
      <img
        src={recipe.strMealThumb}
        alt={"picture of " + recipe.strMeal}
        className="recipe-picture"
      />
      <p className="recipe-description" id="desc">
        {recipe.strInstructions}
      </p>
      <button onClick={(e) => showDesc(e)}>show recipe</button>
      {/* <div id="full-description">Une Description</div> */}
    </div>
  );
};

export default Recipes;
