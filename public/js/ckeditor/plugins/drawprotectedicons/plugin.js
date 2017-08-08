CKEDITOR.plugins.add( 'drawprotectedicons', {
    init: function (editor) {

    },
    afterInit: function (editor) {
        var dataProcessor = editor.dataProcessor,
            dataFilter = dataProcessor && dataProcessor.dataFilter,
            htmlFilter = dataProcessor && dataProcessor.htmlFilter;

        // add a rule to put a placeholder image next to every protected source region
        if ( dataFilter ) {
            dataFilter.addRules( {
                comment: function( commentText, commentElement, abc ) {
                    if(commentText.indexOf(CKEDITOR.plugins.showprotected.protectedSourceMarker) == 0) {
                        commentElement.attributes = [];

                        var cleanedCommentText = CKEDITOR.plugins.showprotected.decodeProtectedSource( commentText );


                        var fakeElement = new CKEDITOR.htmlParser.element( 'showprotected-img', {
                            'class': 'cke_protected',
                            'data-cke-showprotected-temp': true,
                            alt: cleanedCommentText,
                            title: cleanedCommentText
                        });

                        fakeElement.insertAfter(commentElement);

                        return commentText;
                    }



                    return null;
                }
            } );
        }

        // add a rule to remove the placeholder image from the raw HTML
        if ( htmlFilter ) {
            htmlFilter.addRules( {
                elements: {
                    'showprotected-img': function( element ) {
                        // remove the placeholder image so it doesn't show in the source code
                        return false;
                    }
                }
            }, -10 );
        }
    }
});