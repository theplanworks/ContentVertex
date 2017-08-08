<template>
    <div data-vv-scope="page">
        <b-field label="Title" :type="errors.has('page.title') ? 'is-danger' : ''" :message="errors.first('page.title')">
            <b-input name="title" v-model="page.title" data-vv-scope="page" v-validate="'required'"></b-input>
        </b-field>
        <b-field label="Description" :type="errors.has('page.description') ? 'is-danger' : ''" :message="errors.first('page.description')">
            <b-input name="description" v-model="page.description" data-vv-scope="page" v-validate="'required'"></b-input>
        </b-field>
        <button class="button" @click="createPage">
            Save
        </button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                page: {
                    title: "",
                    description: "",
                    content: "page content"
                }
            }
        },
        mounted() {

        },
        methods: {
            createPage() {
                this.$validator.validateAll('page').then(result => {
                    if (result) {
                        this.$http.post('/content-vertex/api/pages', this.page).then(response => {
                            //route to newly created page
                            this.$emit('created', response.data);
                        });
                    }
                });
            }
        }
    }
</script>