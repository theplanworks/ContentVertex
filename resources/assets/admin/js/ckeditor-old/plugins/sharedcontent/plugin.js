CKEDITOR.plugins.add( 'sharedcontent', {
    icons: 'sharedcontent',
    init: function (editor) {

        editor.addCommand('sharedcontent', new CKEDITOR.dialogCommand( 'sharedContentDialog' ));

        editor.ui.addButton('SharedContent', {
            label: 'Insert Shared Content',
            command: 'sharedcontent',
            toolbar: 'insert'
        });


        CKEDITOR.dialog.add('sharedContentDialog', this.path + 'dialogs/sharedcontent.js');

    },
    onLoad: function () {
        CKEDITOR.addCss(
            'img {' +
                'width: 150px;' +
            '}'
        )
    }
});