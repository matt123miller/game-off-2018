<template>
    <div class="flavours">
        <h1>This is the flavours page</h1>
        
        <div v-for="(ingredient, index) in availableIngredients" :key="index">
            <input type="checkbox" id="ingredient-type" data-ingredient-id="{{ ingredient.id }}">
            <label for="ingredient-type"></label>
            {{ ingredient.name }} 
        </div>

    <button type="submit"></button>
    </div>
</template >


<script lang="ts">
import CanvasIngredientPicker from "../components/CanvasIngredientPicker.vue";
import CanvasIngredient from "../components/CanvasIngredient.vue";
import { randomIngredients } from "../components/IngredientList";

export default {
  components: {
    CanvasIngredientPicker,
    CanvasIngredient
  },

  data() {
    return {
      availableIngredients: randomIngredients()
    };
  },

  // Randomly selects a value to randomly increment or decrement every 16 ms.
  // Not really important, just demonstrates that reactivity still works.
  mounted() {
    console.log(this.availableIngredients);
  }
};
</script>

<style scoped lang='scss'>
.ingredients-picker {
  width: 600px;
  height: 600px;
}
</style>