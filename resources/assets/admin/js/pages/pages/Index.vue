<template>
    <div class="container">
        <button class="button" @click="showCreate = true">Create Page</button>
        <b-table :data="pages">
            <template scope="props">
                <b-table-column label="Title">
                    {{props.row.title}}
                </b-table-column>
                <b-table-column label="Actions">
                    <router-link class="button" :to="{name: 'page:edit', params: {pageId: props.row.id}}">Edit</router-link>
                </b-table-column>
            </template>
        </b-table>

        <b-modal :active.sync="showCreate">
            <div class="modal-card">
                <section class="modal-card-body">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create Page</p>
                    </header>
                    <create-page v-on:created="newPage"></create-page>
                </section>

            </div>
        </b-modal>

    </div>
</template>

<script>
    import CreatePage from '../../components/CreatePage.vue';
    export default {
        components: {
            CreatePage
        },
        data() {
            return {
                showCreate: false,
                pages: []
            }
        },
        mounted() {
            this.$http.get('/content-vertex/api/pages').then(response => {
                this.pages = response.data;
            });
        },
        methods: {
            newPage(page) {

                this.$toast.open({
                    message: `${page.title} was created!`,
                    type: 'is-success'
                });

                this.$router.push({name: 'page:edit', params: { pageId: page.id } });
            }
        }
    }
</script>