<template>
    <div class="flavours">
        <h1>This is the flavours page</h1>
        <ul>
        <li v-for="(ingredient, index) in availableIngredients" v-bind="index" :key="index">{{ ingredient }} </li>
        </ul>
    </div>
</template >


<script lang="ts">
import IngredientItem from "../components/IngredientItem";

export default {
  data() {
    return {
      availableIngredients: ["ingredient 1", "ingredient 2", "ingredient 3"]
    };
  }
};
</script>

<style scoped lang='scss'>
</style>