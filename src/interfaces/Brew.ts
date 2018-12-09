import FlavourProfile from './FlavourProfile';
import Ingredient from './Ingredient';
import Container from './Container';

export default interface Brew {
  id: string;
  name: string;
  container: Container;
  ingredients: Ingredient[];
  flavourProfile: FlavourProfile;
  score: number;
  unitsSold: number;
}
