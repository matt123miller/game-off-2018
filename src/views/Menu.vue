<template>
    <div class="menu">
        <h1>Menu</h1>
        <router-link to="/brews">View Brews</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Menu extends Vue {}
</script>
