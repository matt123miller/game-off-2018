import Ingredient from './components/IngredientItem';

const ing = new Ingredient('oats', {
  bitter: 0.2,
  salty: 0.5,
  sour: 0.4,
  spice: 0.8,
  sweet: 0.2,
});

console.log(ing.toString());
