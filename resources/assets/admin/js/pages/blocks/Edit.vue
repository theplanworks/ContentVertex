<template>
    <div class="container">
        <b-field label="Block Title">
            <b-input v-model="block.title"></b-input>
        </b-field>
        <b-field label="Content">
            <editor v-model="block.content"></editor>
        </b-field>
        <button class="button" @click="save">Save</button>
    </div>
</template>

<script>

    import Editor from '../../components/Editor.vue';
    import axios from 'axios';

    export default {
        components: {
            Editor
        },
        data() {
            return {
                block: {}
            }
        },
        mounted() {
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/content-vertex/api/blocks/${to.params.blockId}`).then(response => {
                next(vm => vm.setBlock(response.data))
            });
        },
        beforeRouteUpdate (to, from, next) {
            this.block = null;
            axios.get(`/content-vertex/api/blocks/${to.params.blockId}`).then(response => {
                this.setBlock(response.data);
                next()
            })
        },
        methods: {
            setBlock(block) {
                this.block = block
            },
            save() {
                this.$http.put(`/content-vertex/api/blocks/${this.$route.params.blockId}`, this.block).then(response => {

                    this.$toast.open({
                        message: `${response.data.title} was saved!`,
                        type: 'is-success'
                    });

                    this.$router.push({name: 'block:index'});
                });
            }
        }
    }
</script>