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
export default {
    data() {
        return {
            currentBrew: {
                id: 34567890,
                name: 'Broski Brewski',
                ingredients: [
                    {
                        name: 'Candyfloss',
                        flavourProfile: {
                        bitter: 0.2,
                        sweet: 0.8,
                        sour: 0.1,
                        spice: 0.0,
                        salty: 0.0,
                        },
                    },
                    {
                        name: 'Oats',
                        flavourProfile: {
                        bitter: 0.4,
                        sweet: 0.6,
                        sour: 0.1,
                        spice: 0.1,
                        salty: 0.1,
                        },
                    },
                ],
                flavourProfile: {
                    bitter: 0.3,
                    sweet: 0.7,
                    sour: 0.1,
                    spice: 0.05,
                    salty: 0.05,
                },
            },
        };
    },
    methods: {
        chooseContainer: function(slug: string) {
            this.currentBrew.container = slug;
        }
    },
}
</script>