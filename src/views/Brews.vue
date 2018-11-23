<template>
    <div class="brews">
        <h1>Select A Brew</h1>
        <ul>
            <li v-for="(brew, key, index) in $store.state.brews" :key="index"><router-link :to="{ name: 'ingredients', params: { brew: brew.id }}">{{ brew.name }}</router-link></li>
            <li><router-link :to="{ name: 'ingredients', params: {brew: id }}" v-on:click.native="createNewBrew(id)">Add A New Brew</router-link></li>
        </ul>
    </div>
</template>


<script lang="ts">
import { generateId } from "../components/utils";

export default {
  data() {
    return {
      id: generateId()
    };
  },
  methods: {
    createNewBrew: function(id: string) {
        const newBrew = {
            id: id,
            name: "New Brew" // Could add randomly generated name here in future?
        };
        this.$store.commit('addBrew', {
            brew: newBrew
        });
    }
  },
  computed: {
    allBrews: function() {
        return this.$store.state.brews;
    }
  }
};
</script>