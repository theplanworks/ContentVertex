<script>
    export default {
        name: 'App'
    }
</script>

<template>
    <div>
        <nav class="navbar">
            <router-link to="/" class="navbar-item">Content Vertex</router-link>
            <router-link :to="{name: 'site:index'}" class="navbar-item">Sites</router-link>
            <router-link :to="{name: 'page:index'}" class="navbar-item">Pages</router-link>
            <router-link :to="{name: 'block:index'}" class="navbar-item">Blocks</router-link>
        </nav>

        <router-view></router-view>

    </div>
</template>