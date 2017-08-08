<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Dashboard
                    </h1>
                    <h2 class="subtitle">

                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child notification is-info">
                        <p class="title has-text-centered">
                            <b-icon
                                    icon="server"
                                    size="is-large">
                            </b-icon><br/>
                            Sites {{stats.sites}}
                        </p>

                        <router-link to="/sites" class="button is-pulled-right">Manage</router-link>
                    </div>
                </div>
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child notification is-info">
                        <p class="title has-text-centered">Pages {{stats.pages}}</p>
                        <router-link :to="{name: 'page:index'}" class="button is-pulled-right">Manage</router-link>
                    </div>
                </div>
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child notification is-info">
                        <p class="title has-text-centered">Blocks {{stats.blocks}}</p>
                        <router-link :to="{name:'block:index'}" class="button is-pulled-right">Manage</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        data() {
            return {
                stats: {
                    sites: 0,
                    pages: 0,
                    blocks: 0
                }
            }
        },
        mounted() {
            axios.get('/content-vertex/api/stats').then(response => {
                this.stats = response.data;
            })
        },
        methods: {}
    }
</script>