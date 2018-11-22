import FlavourProfile from './FlavourProfile';
import Ingredient from './Ingredient';

export default interface Brew {
  id: string;
  name: string;
  container: any;
  ingredients: Ingredient[];
  flavourProfile: FlavourProfile;
  score: number;
  unitsSold: number;
}
