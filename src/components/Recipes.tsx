import React from "react";

const Recipes = ({ recipe }: { recipe: any }) => {
  function showDesc(e: any) {
    // corriger font size et mettre croix  en absolute et grand
    let description = e.target.previousElementSibling.innerHTML;
    let modal = document.createElement("div");
    let cross = document.createElement("div");
    document.body.appendChild(modal);
    modal.classList.add("modal");
    modal.textContent = description;
    modal.appendChild(cross);
    cross.textContent = "X";
    cross.classList.add("cross");
    modal.addEventListener("click", (e) => {
      modal.style.display = "none";
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
      <button className="show-more" onClick={(e) => showDesc(e)}>
        show more..
      </button>
      {/* <div id="full-description">Une Description</div> */}
    </div>
  );
};

export default Recipes;
