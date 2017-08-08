<template>
    <div>
        <b-field label="Name">
            <b-input v-model="block.title"></b-input>
        </b-field>
        <button class="button" @click="saveBlock" >Save</button>
    </div>
</template>

<script>

    export default {
        name: 'Block',
        data() {
            return {
                block: {
                    title: '',
                    content: 'Content goes here'
                }
            }
        },
        mounted() {

        },
        methods: {
            saveBlock() {
                this.$http.post('/content-vertex/api/blocks', this.block).then(response => {
                   this.$emit('created', response.data);
                });
            }
        }
    }
</script>