<template>
    <div class="flavours">
        <h1>This is the flavours page</h1>
        <p>Current Brew: {{ brew }}</p>
        <ul>
            <li v-for="(ingredient, index) in availableIngredients" :key="index">{{ ingredient.name }} </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { randomIngredients } from "../components/IngredientList";

export default {
  data() {
    return {
      availableIngredients: randomIngredients(),
      brew: this.$route.params.brew,
    };
  }
};
</script>
