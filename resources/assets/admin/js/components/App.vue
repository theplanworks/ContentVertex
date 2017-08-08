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
            <router-link :to="{name: 'media:index'}" class="navbar-item">Media</router-link>
        </nav>
        <div class="container">
            <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                <ul>
                    <li class="is-active" v-for="route in $route.matched">
                        <router-link :to="{name: route.name}">
                            {{route.name}}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <router-view></router-view>

    </div>
</template>