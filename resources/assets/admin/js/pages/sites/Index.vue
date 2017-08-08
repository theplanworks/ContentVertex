<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Sites
                    </h1>
                    <h2 class="subtitle">
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <b-table :data="sites.data">
                <template scope="props">
                    <b-table-column field="name" label="Name" sortable>
                        {{ props.row.name }}
                    </b-table-column>
                    <b-table-column field="slug" label="Slug" sortable>
                        {{ props.row.slug }}
                    </b-table-column>

                    <b-table-column field="id" label="Actions" >
                        <router-link :to="{ name: 'site:edit', params: { siteId: props.row.id }}" class="button">Edit</router-link>
                        <button class="button is-danger">Delete</button>
                    </b-table-column>

                </template>
            </b-table>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                sites: {
                    data: []
                }

            }
        },
        mounted() {
            this.$http.get('/content-vertex/api/sites').then(response => {
                console.log(response.data.data);
                this.sites = response.data;
            })
        },
        methods: {}
    }
</script>