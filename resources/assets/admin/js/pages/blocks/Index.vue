<template>
    <div class="container">
        <button class="button" @click="showCreate = true" >Create Block</button>
        <b-table :data="blocks">
            <template scope="props">
                <b-table-column field="name" label="Name">
                    {{props.row.title}}
                </b-table-column>
                <b-table-column field="id" label="Actions">
                    <router-link :to="{name:'block:edit', params:{blockId: props.row.id}}" class="button">Edit</router-link>
                </b-table-column>
            </template>
            <div slot="empty" class="has-text-centered">
                This table is empty!
            </div>
        </b-table>

        <b-modal :active.sync="showCreate">
            <div class="modal-card">
                <section class="modal-card-body">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create Block</p>
                    </header>
                    <block v-on:created="createBlock"></block>
                </section>

            </div>
        </b-modal>

    </div>
</template>

<script>
    import Block from '../../components/CreateBlock.vue';
    export default {
        components: {
            Block
        },
        data() {
            return {
                showCreate: false,
                blocks: []
            }
        },
        mounted() {
            this.$http.get('/content-vertex/api/blocks').then(response => {
                this.blocks = response.data;
            });
        },
        methods: {
            createBlock(block) {

                this.$toast.open({
                    message: `${block.title} was created!`,
                    type: 'is-success'
                });

                this.$router.push({name: 'block:edit', params:{blockId: block.id}})
            }
        }
    }
</script>