<template>
    <div class="containers">
        <h1>Select A Container</h1>
        <ul>
            <li v-on:click="chooseContainer('stubby')">Stubby Can (330ml)</li>
            <li v-on:click="chooseContainer('pint')">Pint Can (568ml)</li>
            <li v-on:click="chooseContainer('bottle')">Bottle (330ml)</li>
            <li v-on:click="chooseContainer('keg')">Keg (5000ml)</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Container from '@/interfaces/Container';
import Brew from "@/interfaces/Brew";
import ContainerItem from '@/components/ContainerItem';

export default {
    data() {
        return {
            currentBrew: {} as Brew,
            chosenContainer: new ContainerItem('Empty', 0),
        };
    },
    methods: {
        currentBrew: function() {
            this.$store.getters.currentBrew()
        },
        chooseContainer: function(slug: string) {
            this.$store.commit("addContainer", this.chosenContainer);
        }
    },
}
</script>