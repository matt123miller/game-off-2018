import { Component, Prop, Vue } from "vue-property-decorator";
import FlavourProfile from "../interfaces/FlavourProfile";

export default class Ingredients extends Vue {
  @Prop()
  public name: string;
  @Prop()
  public flavourProfile: FlavourProfile;

  constructor(name: string, flavourProfile: FlavourProfile) {
    super();
    this.name = name;
    this.flavourProfile = flavourProfile;
  }
}
