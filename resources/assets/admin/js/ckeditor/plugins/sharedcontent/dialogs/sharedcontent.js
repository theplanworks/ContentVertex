CKEDITOR.dialog.add('sharedContentDialog', function (editor) {


    //var results = null;

    /*$.ajax('/api/blocks', {
        url: '/api/blocks',
        type: 'get',
        async: false,
        success: function (data) {
            results = data;
        }
    });*/



    var results = CKEDITOR.ajax.load( '/content-vertex/api/ck-blocks');

    results = JSON.parse(results);

    return {
        title: 'Shared Content Properties',
        minWidth: 400,
        minHeight: 200,
        onShow: function() {
            try {


                this._.selectedElement = editor.getSelection().getSelectedElement();
                var decodedSourceValue = CKEDITOR.plugins.showprotected.decodeProtectedSource( this._.selectedElement.getAttribute('data-cke-realelement') );

                var oParser = new DOMParser();
                var oDOM = oParser.parseFromString(decodedSourceValue, "text/xml");
                var x = oDOM.getElementsByTagName("block")[0];
                var y = x.childNodes[0];
                var z = y.nodeValue;

                this.setValueOf('tab-select', 'select-content', z);

            } catch(e) {}
        },
        contents: [
            {
                id: 'tab-select',
                label: 'Select Content',
                elements: [
                    {
                        type: 'select',
                        id: 'select-content',
                        label: 'Select Content',
                        setup: '',
                        items: results,
                        commit: function (data) {
                            console.log(data);
                        }
                    }
                ]
            }
        ],
        onHide: function() {
            CKEDITOR.plugins.showprotected.selectedElement = undefined;
        },
        onOk: function () {
            var dialog = this;
            var id = dialog.getValueOf('tab-select', 'select-content');
            var value = "<block>" + id + "</block>";
            try {
                var encodedSourceValue = CKEDITOR.plugins.showprotected.encodeProtectedSource( newSourceValue );

                this._.selectedElement.setAttribute('data-cke-realelement', encodedSourceValue);
                this._.selectedElement.setAttribute('title', value);
                this._.selectedElement.setAttribute('alt', value);
            } catch(e) {
                editor.insertHtml(value);
                //editor.insertHtml("<showprotected-img class='cke_protected' data-cke-showprotected-temp='true' alt='"+value+"' title='"+value+"'></showprotected-img>");
            }
        }
    }
});
