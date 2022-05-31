import "./styles/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenShieldRecipeModified = {
  ...elvenShieldRecipe,
  leather: 10,
  refinedMoonstone: 5,
};

console.log(elvenShieldRecipeModified);
