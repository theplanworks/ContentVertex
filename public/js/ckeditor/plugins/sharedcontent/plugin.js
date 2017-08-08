CKEDITOR.plugins.add( 'sharedcontent', {
    icons: 'sharedcontent',
    requires: 'dialog,fakeobjects',
    init: function (editor) {

        editor.addCommand('sharedcontent', new CKEDITOR.dialogCommand( 'sharedContentDialog' ));

        editor.ui.addButton('SharedContent', {
            label: 'Insert Shared Content',
            command: 'sharedcontent',
            toolbar: 'insert'
        });


        CKEDITOR.dialog.add('sharedContentDialog', this.path + 'dialogs/sharedcontent.js');


        editor.on( 'doubleclick', function( evt ) {
            var element = evt.data.element;

            if ( element.is( 'img' ) && element.hasClass( 'cke_protected' ) ) {
                evt.data.dialog = 'sharedContentDialog';
            }
        } );

    },

    afterInit: function (editor) {

        // Register a filter to displaying placeholders after mode change.

        var dataProcessor = editor.dataProcessor,
            dataFilter = dataProcessor && dataProcessor.dataFilter;

        if ( dataFilter ) {
            dataFilter.addRules( {
                comment: function( commentText, commentElement ) {
                    if(commentText.indexOf(CKEDITOR.plugins.showprotected.protectedSourceMarker) == 0) {
                        commentElement.attributes = [];
                        var fakeElement = editor.createFakeParserElement( commentElement, 'cke_protected', 'protected' );

                        var cleanedCommentText = CKEDITOR.plugins.showprotected.decodeProtectedSource( commentText );
                        fakeElement.attributes.title = fakeElement.attributes.alt = cleanedCommentText;

                        return fakeElement;
                    }

                    return null;
                }
            } );
        }

    },

    onLoad: function () {
        var iconPath = CKEDITOR.getUrl( this.path + 'images' + '/code.gif' ),
            baseStyle = 'background:url(' + iconPath + ') no-repeat %1 center;border:1px dotted #00f;background-size:16px;';

        var template = '.%2 img.cke_protected' +
            '{' +
            baseStyle +
            'width:16px;' +
            'min-height:15px;' +
            // The default line-height on IE.
            'height:1.15em;' +
            // Opera works better with "middle" (even if not perfect)
            'vertical-align:' + ( CKEDITOR.env.opera ? 'middle' : 'text-bottom' ) + ';' +
            '}';

        // Styles with contents direction awareness.
        function cssWithDir( dir ) {
            return template.replace( /%1/g, dir == 'rtl' ? 'right' : 'left' ).replace( /%2/g, 'cke_contents_' + dir );
        }

        CKEDITOR.addCss( cssWithDir( 'ltr' ) + cssWithDir( 'rtl' ) );
    }
});

CKEDITOR.plugins.showprotected = {

    protectedSourceMarker: '{cke_protected}',

    decodeProtectedSource: function( protectedSource ) {
        if(protectedSource.indexOf('%3C!--') == 0) {
            return decodeURIComponent(protectedSource).replace( /<!--\{cke_protected\}([\s\S]+?)-->/g, function( match, data ) {
                return decodeURIComponent( data );
            } );
        } else {
            return decodeURIComponent(protectedSource.substr(CKEDITOR.plugins.showprotected.protectedSourceMarker.length));
        }
    },

    encodeProtectedSource: function( protectedSource ) {
        return '<!--' + CKEDITOR.plugins.showprotected.protectedSourceMarker +
            encodeURIComponent( protectedSource ).replace( /--/g, '%2D%2D' ) +
            '-->';
    }

};