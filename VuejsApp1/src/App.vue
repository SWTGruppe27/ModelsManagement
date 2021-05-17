<template>
    <div id="app">
        <router-view></router-view>
        <button id="login">
            <a><router-link to="/Home">Login</router-link></a>
        </button>
    </div>
</template>


<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
</style>

