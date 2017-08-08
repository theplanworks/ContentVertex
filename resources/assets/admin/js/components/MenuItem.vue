<template>
    <div class="link-form">
        <b-field label="Title" :type="errors.has('link-item.title') ? 'is-danger' : ''" :message="errors.first('link-item.title')">
            <b-input v-model="link.title" name="title" v-validate="'required'" data-vv-scope="link-item"></b-input>
        </b-field>
        <b-field label="Url" :type="errors.has('link-item.url') ? 'is-danger' : ''" :message="errors.first('link-item.url')">
            <b-input v-model="link.url" name="url" v-validate="'required'" data-vv-scope="link-item"></b-input>
        </b-field>
        <b-field grouped>
            <b-field label="Page">
                <b-select placeholder="Select a page" v-model="link.page_id">
                    <option v-for="page in pages" :value="page.id" :key="page.id">
                        {{page.title}}
                    </option>
                </b-select>
            </b-field>
            <b-field label="Parent">
                <b-select placeholder="Select a parent" v-model="link.parent_id">
                    <option v-for="link in links" :value="link.id" :key="link.id">
                        {{link.title}}
                    </option>
                </b-select>
            </b-field>
            <b-field v-if="link.id" label="Order">
                <b-select placeholder="Change Order" v-model="link.order" v-on:change="createOrUpdate">
                    <option v-for="(link, index) in orderList" :value="index + 1" :key="index">
                        {{index + 1}}
                    </option>
                </b-select>
            </b-field>
        </b-field>


        <b-field>
            <b-checkbox v-model="link.external">External Link</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox v-model="link.in_navigation">Show in Navigation</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox v-model="link.in_site_map">Show in Site Map</b-checkbox>
        </b-field>

        <button class="button" @click="createOrUpdate">{{mode}}</button>
        <button v-if="link.id" class="button is-danger" @click="confirmDelete">Delete</button>

    </div>
</template>

<script>
    import collect from "collect.js";

    export default {
        name: "MenuLink",
        components: {
        },
        data() {
            return {
                orderList: []
            }
        },
        props: {
            menuId: {
                type: Number,
                required: true,
            },
            siteId: {
                type: Number,
                required: true,
            },
            link: {
                type: Object,
                required: true,
            },
            links: {
                type: Array,
                required: true
            },
            pages: {
                type: Array,
                required: true
            },
            mode: {
                type: String,
                default: () => {
                    return 'Update'
                }
            }

        },
        mounted() {
            if(this.link.parent) {
                this.orderList = this.link.parent.children;
            } else {
                this.orderList = this.links;
            }

        },
        methods: {
            createOrUpdate() {
                const collection = collect(this.link);

                let verb = 'post';
                let link = '';
                let successText = 'Menu item created!';

                if(collection.has('menu_id')) {
                    verb = 'put';
                    link = this.link.id;
                    successText = 'Menu item updated!';
                }


                const filtered = collection.except(['children', 'parent']);

                this.$validator.validateAll('link-item').then(result => {
                    if (result) {
                        this.$http({
                            method: verb,
                            url: `/content-vertex/api/sites/${this.siteId}/menus/${this.menuId}/links/${link}`,
                            data: filtered.all()
                        }).then(response => {

                            this.$toast.open({
                                message: successText,
                                type: 'is-success'
                            });

                            this.$emit('change');
                        });
                    }
                });

            },
            confirmDelete() {
                this.$dialog.confirm({
                    title: 'Delete link',
                    message: 'Are you sure you want to <strong>delete</strong> this link?',
                    confirmText: 'Delete Link',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.delete()
                })
            },
            delete() {
                this.$http.delete(`/content-vertex/api/sites/${this.siteId}/menus/${this.menuId}/links/${this.link.id}`)
                    .then(response => {
                        this.$toast.open({
                            message: 'Link has been deleted!',
                            type: 'is-success'
                        });

                        this.$emit('remove', this.link);

                    });
            }
        },
        computed: {
        }
    }
</script>