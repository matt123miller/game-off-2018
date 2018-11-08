<template>
    <div class="brews">
        <h1>Select A Brew</h1>
        <ul>
            <li v-for="(brew, key, index) in $store.state.brews" :key="index"><router-link to="/flavours">{{ brew.name }}</router-link></li>
            <li><router-link to="/flavours">New Brew</router-link></li>
        </ul>
    </div>
</template>