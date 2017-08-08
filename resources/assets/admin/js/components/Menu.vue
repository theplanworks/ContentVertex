<template>
    <div class="menu-form">
        <b-field label="Menu Name" :type="errors.has('menu.name') ? 'is-danger' : ''" :message="errors.first('menu.name')">
            <b-input v-model="menu.name" v-on:input="slugName" v-validate="'required'" data-vv-scope="menu" name="name"></b-input>
        </b-field>
        <b-field label="Menu Slug">
            <b-input v-model="menu.slug" :readonly="true"></b-input>
        </b-field>
        <button class="button" @click="saveMenu">Save</button>
    </div>
</template>

<script>
    import {slugify} from '../config/helper';
    import collect from 'collect.js';
    export default {
        data() {
            return {
            }
        },
        props: {
            menu: {
                type: Object,
                default: () => {
                    return {id: null, name: "", slug: ""}
                }
            }
        },
        mounted() {

        },
        methods: {
            slugName(name) {
                this.menu.slug = slugify(name)
            },
            saveMenu() {
                this.$validator.validateAll('menu').then(result => {
                    if (result) {

                        let verb = 'post';

                        let menu = '';

                        const collection = collect(this.menu);

                        const filtered = collection.except(['links']);

                        if (this.menu.id !== null) {
                            verb = 'put';
                            menu = this.menu.id;
                        }

                        this.$http({
                            method: verb,
                            url: `/content-vertex/api/sites/${this.$route.params.siteId}/menus/${menu}`,
                            data: filtered.all(),
                        }).then(response => {
                            this.$emit('updated', response.data);
                        })
                    }
                });
            }
        }
    }
</script>