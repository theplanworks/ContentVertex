<template>
    <textarea name="editor1" id="editor1" :value="value" @input="update($event.target.value)"></textarea>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello world!'
            }
        },
        props: {
            value: {
                required: true
            }
        },
        mounted() {
            CKEDITOR.replace( 'editor1' );
            CKEDITOR.config.protectedSource.push(/<block[\s\S]*?<\/block>/gi);
            CKEDITOR.config.autoParagraph = false;
            CKEDITOR.config.extraPlugins = 'sharedcontent,ajax,sourcearea';
            CKEDITOR.instances['editor1'].setData(this.value);
            let editor = this;
            CKEDITOR.instances["editor1"].on('change', function() {
                editor.update(this.getData());
            });

        },
        methods: {
            update(value) {
                this.$emit('input', value);
            }
        }
    }
</script>