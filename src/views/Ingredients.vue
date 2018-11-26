<template>
  <div class="flavours">
    <h1>This is the flavours page</h1>

    <div v-for="(ingredient, index) in availableIngredients" :key="index">
      <input
        type="checkbox"
        :id="ingredient"
        :value="ingredient"
        :data-ingredient-id="ingredient.id"
        v-model="chosenIngredients"
      >
      <label :for="ingredient"></label>
      {{ ingredient.name }}
    </div>

    <button v-on:click="createBeer">create beer</button>
  </div>
</template>


<script lang="ts">
import { randomIngredients } from "../components/IngredientList";
import IngredientItem from "@/components/IngredientItem";

export default {
  components: {},

  data() {
    return {
      availableIngredients: randomIngredients(),
      chosenIngredients: Array<IngredientItem>()
    };
  },
  created() {
    console.log(this.availableIngredients);
  },
  methods: {
    createBeer: function(event: Event) {
      // Add the new ingredients to the current beer via a Vuex mutation
      this.$store.commit("addIngredients", this.chosenIngredients);
    }
  }
};
</script>

<style scoped lang='scss'>
.ingredients-picker {
  width: 600px;
  height: 600px;
}
</style>