import FlavourProfile from '@/interfaces/FlavourProfile';
import Ingredient from '@/interfaces/Ingredient';

export default class IngredientItem implements Ingredient {
  public name: string;
  public flavourProfile: FlavourProfile;

  constructor(name: string, flavourProfile: FlavourProfile) {
    this.name = name;
    this.flavourProfile = flavourProfile;
  }

  public toString(): string {
    const { bitter, salty, sweet, sour, spice } = this.flavourProfile;
    return `Flavour: ${this.name},
    Properties:
      bitter ${bitter}
      salty ${salty}
      sweet ${sweet}
      sour ${sour}
      spice ${spice}
    `;
  }
}
