<template>
    <div class="container">
        <b-field label="Title">
            <b-input v-model="page.title"></b-input>
        </b-field>
        <b-field label="Description">
            <b-input v-model="page.description"></b-input>
        </b-field>
        <b-field label="Content">
            <editor v-model="page.content"></editor>
        </b-field>

        <button @click="savePage" class="button">Save</button>
    </div>
</template>

<script>
    import Editor from '../../components/Editor.vue';
    import axios from 'axios';

    export default {
        components:{
            Editor
        },
        data() {
            return {
                page: {},
            }
        },
        mounted() {
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/content-vertex/api/pages/${to.params.pageId}`).then(response => {
                next(vm => vm.setPage(response.data))
            });
        },
        beforeRouteUpdate (to, from, next) {
            this.page = null;
            axios.get(`/content-vertex/api/pages/${to.params.pageId}`).then(response => {
                this.setPage(response.data);
                next()
            })
        },
        methods: {
            setPage(page) {
                this.page = page;
            },
            savePage() {

                this.$http.put(`/content-vertex/api/pages/${this.$route.params.pageId}`, this.page).then(response => {

                    this.$toast.open({
                        message: `${response.data.title} was saved!`,
                        type: 'is-success'
                    });

                    this.$router.push({name: 'page:index'});
                });


            }
        }
    }
</script>