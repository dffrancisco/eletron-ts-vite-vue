<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('Olá Francisco')
const count = ref(0)

</script>

<template>
    <div class="main">
        <h1>{{ msg }}</h1>
        <img src="../../assets/icons/icon.png" height="120" />

        <p>
            Recommended IDE setup:
            <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
            +
            <a
                href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
                target="_blank"
            >Vetur</a>
            or
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
            (if using
            <code>&lt;script setup&gt;</code>)
        </p>

        <p>
            See
            <code>README.md</code> for more information.
        </p>

        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>

        <button type="button" @click="count++">count is: {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
    </div>
</template>

<style scoped>
.main {
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 200px);
    justify-content: center;
}

a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    /* background-color: #eee; */
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>