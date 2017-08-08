<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Site: [ {{site.name}} ]
                    </h1>
                    <h2 class="subtitle">
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="columns">
                <div class="column is-half">
                    <h2>Basic Info</h2>
                    <b-field label="Name" :type="errors.has('site-basic.name') ? 'is-danger' : ''" :message="errors.first('site-basic.name')">
                        <b-input v-validate="'required'" name="name" v-model="site.name" v-on:input="slugName" data-vv-scope="site-basic"></b-input>
                    </b-field>
                    <b-field label="Slug">
                        <b-input v-model="site.slug" v-on:input="slugName" :readonly="true" ></b-input>
                    </b-field>

                    <div class="columns">
                        <div class="column is-offset-1">
                            <b-field  v-for="(domain, index) in site.domains" :key="index" grouped>
                                <b-field label="Domain" :type="errors.has('site-basic.domain' + index) ? 'is-danger' : ''" :message="errors.first('site-basic.domain' + index)">
                                    <b-input v-validate="'required'" v-model="domain.domain" :name="'domain' + index" data-vv-scope="site-basic"></b-input>
                                </b-field>
                                <b-field label="Production">
                                    <b-switch v-model="domain.is_prod"></b-switch>
                                </b-field>
                                <b-field label="Remove">
                                    <button @click="confrimDomain(domain, index)" class="button is-danger">
                                        <span class="icon is-small">
                                            <i class="fa fa-trash"></i>
                                        </span>
                                    </button>
                                </b-field>
                            </b-field>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <p class="control">
                            <button @click="saveChanges" class="button is-primary">
                                Save changes
                            </button>
                        </p>
                        <p class="control">
                            <button @click="addDomain" class="button">
                                Add Domain
                            </button>
                        </p>
                        <p class="control">
                            <button class="button is-danger">
                                Delete Site
                            </button>
                        </p>
                    </div>
                </div>
                <div class="column">
                    <h2>Menus</h2>
                    <b-table :data="site.menus">
                        <template scope="props">
                            <b-table-column field="name" label="Name">
                                {{props.row.name}}
                            </b-table-column>
                            <b-table-column label="Actions">
                                <router-link :to="{ name: 'site:menu:edit', params: { siteId: site.id, menuId: props.row.id } }" class="button">Edit</router-link>
                                <router-link :to="{}" class="button is-danger">Delete</router-link>
                            </b-table-column>
                        </template>
                    </b-table>
                    <button class="button" @click="createMenu = true">Create Menu</button>
                </div>
            </div>

        </div>
        <b-modal :active.sync="createMenu">
            <div class="modal-card">
                <section class="modal-card-body">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create Menu</p>
                    </header>
                    <menu-form v-on:updated="menuCreated"></menu-form>
                </section>

            </div>
        </b-modal>
    </div>
</template>

<script>
    import {slugify} from '../../config/helper';
    import collect from 'collect.js';
    import MenuForm from '../../components/Menu.vue';
    export default {
        components: {
            MenuForm
        },
        data() {
            return {
                createMenu: false,
                site: {
                    domains:[],
                    menus:[]
                }
            }
        },
        mounted() {
            this.$http.get(`/content-vertex/api/sites/${this.$route.params.siteId}`).then(response => {
               this.site = response.data;
            });
        },
        methods: {
            slugName(text) {
                this.site.slug = slugify(text);
            },
            addDomain() {
                this.site.domains.push({id:null, domain: '', is_prod: false})
            },

            menuCreated(menu) {
                this.$router.push({name: 'site:menu:edit', params: { siteId: this.site.id, menuId: menu.id } });
            },

            confrimDomain(domain, index) {
                this.$dialog.confirm({
                    title: 'Deleting domain',
                    message: 'Are you sure you want to <strong>delete</strong> this domain?',
                    confirmText: 'Delete domain',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.removeDomain(domain, index)
                })
            },

            removeDomain(domain, index) {

                if(domain.id === null) {
                    this.site.domains.splice(index, 1);
                } else {
                    this.$http.delete(`/content-vertex/api/domains/${domain.id}`).then(response => {

                        const collection = collect(this.site.domains);

                        const filtered = collection.where('id', '!==', domain.id);

                        this.site.domains = filtered.all();

                        this.$toast.open({
                            message: 'Domain deleted',
                            type: 'is-success'
                        });

                    })
                }




            },
            saveChanges() {
                this.$validator.validateAll('site-basic').then(result => {
                    if(result) {
                        this.$http.put(`/content-vertex/api/sites/${this.site.id}`, this.site).then(reponse => {
                            this.site = reponse.data;
                            this.$toast.open({
                                message: 'Site saved',
                                type: 'is-success'
                            });
                        });
                    }
                });
            }
        }
    }
</script>