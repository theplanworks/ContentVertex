<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Menu
                    </h1>
                    <h2 class="subtitle">
                        Create menus for site
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <router-link :to="{name:'site:edit', params: {siteId: this.$route.params.siteId}}">Back</router-link>
            <div class="columns">
                <div class="column is-4">
                   <menu-form v-on:updated="menuUpdate" :menu="menu"></menu-form>
                </div>
                <div class="column">

                    <b-panel>
                        <strong slot="header">New Menu</strong>
                        <menu-item v-if="menu.id" :menu-id="menu.id" :links="this.menu.links" :link="newLink" :site-id="parseInt($route.params.siteId)" :pages="pages" mode="Create Link" v-on:change="addLink"></menu-item>
                    </b-panel>

                    <hr>

                    <b-panel class="link-panel" :collapsible="true" :open="false" v-for="link in sortByOrderFilterByParent(null)" :key="link.id" >
                        <strong slot="header">{{link.title}}</strong>
                        <div class="content">

                            <menu-item :link="link" :menuId="menu.id" :siteId="parseInt($route.params.siteId)" :links="filterLinksByParent(null)" :pages="pages" mode="Update Link" v-on:remove="removeLink" v-on:change="getMenu"></menu-item>

                            <h2>Children</h2>

                            <b-panel :collapsible="true" :open="false" v-for="child in link.children" :key="child.id">
                                <strong slot="header">{{child.title}}</strong>
                                <menu-item :link="child" :menuId="menu.id" :siteId="parseInt($route.params.siteId)" :links="filterLinksByParent(null)" :pages="pages" mode="Update Link" v-on:remove="removeLink" v-on:change="getMenu"></menu-item>
                            </b-panel>

                        </div>
                    </b-panel>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {slugify} from '../../../config/helper';
    import collect from 'collect.js';
    import MenuItem from '../../../components/MenuItem.vue';
    import MenuForm from '../../../components/Menu.vue';
    const newLink = { external: false, in_navigation: true, in_site_map: true, parent_id: null, page_id: null };
    export default {
        components: {
            MenuItem,
            MenuForm
        },
        data() {
            return {
                createMode: true,
                menu: {
                    name: '',
                    slug: '',
                    links: [],
                    site_id: 0
                },
                newLink: Object.assign({}, newLink),
                pages: []
            }
        },
        mounted() {

            this.$http.get(`/content-vertex/api/sites/${this.$route.params.siteId}/menus/${this.$route.params.menuId}`).then(response => {
                this.menu = response.data;
            });
            this.$http.get('/content-vertex/api/pages').then(response => {
                this.pages = response.data;
            });

            this.getMenu();

        },
        methods: {
            slugName(name) {
                this.menu.slug = slugify(name)
            },
            menuUpdate(menu) {
                this.menu = menu;
            },
            removeLink(link) {
                const collection = collect(this.menu.links);
                const filtered = collection.where('id', '!==', link.id);
                this.menu.links = filtered.all();
            },
            addLink() {
                this.newLink = Object.assign({}, newLink);
                this.getMenu();
            },
            filterLinksByParent(parentId) {
                return this.menu.links.filter(link => {
                    return link.parent_id === parentId;
                });
            },
            sortByOrderFilterByParent(parentId) {
                const collection = collect(this.filterLinksByParent(parentId));

                const sorted = collection.sortBy('order');

                return sorted.all();
            },
            getMenu() {
                this.$http.get(`/content-vertex/api/sites/${this.$route.params.siteId}/menus/${this.$route.params.menuId}`).then(response => {
                    this.menu = response.data;
                });
            }
        },
        computed: {
        }
    }
</script>