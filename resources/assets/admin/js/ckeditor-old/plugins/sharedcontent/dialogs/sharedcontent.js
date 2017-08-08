CKEDITOR.dialog.add('sharedContentDialog', function (editor) {


    var results = null;

    $.ajax('/api/blocks', {
        url: '/api/blocks',
        type: 'get',
        async: false,
        success: function (data) {
            results = data;
        }
    });

    return {
        title: 'Shared Content Properties',
        minWidth: 400,
        minHeight: 200,
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
        onOk: function () {
            var dialog = this;
            var id = dialog.getValueOf('tab-select', 'select-content');
            editor.insertHtml("<block>" + id + "</block>");
        }
    }
});
