import IngredientItem from './IngredientItem';
import { shuffle } from './utils';

export function randomIngredients(): IngredientItem[] {
  const ingredients = listIngredients();

  return shuffle(ingredients);
}

export function listIngredients(): IngredientItem[] {
  return [
    new IngredientItem('Oats', {
      bitter: 0,
      sweet: 0,
      sour: 0,
      spice: 0,
      salty: 0,
    }),
    new IngredientItem('Candyfloss', {
      bitter: 0.2,
      sweet: 0.8,
      sour: 0.1,
      spice: 0.0,
      salty: 0.0,
    }),
    new IngredientItem('Crystal Hops', {
      bitter: 0,
      sweet: 0,
      sour: 0,
      spice: 0,
      salty: 0,
    }),
    new IngredientItem('Molasses', {
      bitter: 0.2,
      sweet: 0.8,
      sour: 0.1,
      spice: 0.0,
      salty: 0.0,
    }),
    new IngredientItem('Honey', {
      bitter: 0,
      sweet: 0,
      sour: 0,
      spice: 0,
      salty: 0,
    }),
    new IngredientItem('Lemon', {
      bitter: 0.2,
      sweet: 0.8,
      sour: 0.1,
      spice: 0.0,
      salty: 0.0,
    }),
    new IngredientItem('Barley', {
      bitter: 0,
      sweet: 0,
      sour: 0,
      spice: 0,
      salty: 0,
    }),
    new IngredientItem('Tea', {
      bitter: 0.2,
      sweet: 0.8,
      sour: 0.1,
      spice: 0.0,
      salty: 0.0,
    }),
  ];
}
