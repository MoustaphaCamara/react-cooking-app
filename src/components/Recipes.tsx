import React from "react";

const Recipes = ({ recipe }: { recipe: any }) => {
  // modal
  function showDesc(e: any) {
    let description = e.target.previousElementSibling.innerHTML;
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let cross = document.createElement("div");
    document.body.appendChild(modal);
    modal.appendChild(modalContent);
    modal.appendChild(cross);
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    cross.classList.add("cross");
    modalContent.textContent = description;
    cross.textContent = "X";
    cross.addEventListener("click", (e) => {
      modal.remove();
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
    </div>
  );
};

export default Recipes;
