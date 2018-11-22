<template>
    <div class="flavours">
        <h1>This is the flavours page</h1>
        <ul>
            <li v-for="(ingredient, index) in availableIngredients" :key="index">{{ ingredient.name }} </li>
        </ul>
    </div>
</template >


<script lang="ts">
import { randomIngredients } from "../components/IngredientList";

export default {
  data() {
    return {
      availableIngredients: randomIngredients()
    };
  },
  mounted() {
    console.log(this.$route.params.incomingStore);
  }
};
</script>
