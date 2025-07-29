(function (wp) {
    const { registerFormatType, insert } = wp.richText;
    const { RichTextToolbarButton } = wp.blockEditor;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    registerFormatType('custom/nbsp-inserter', {
        title: __('Espace insécable', 'textdomain'),
        tagName: 'bold',
        className: null,
        edit({ value, onChange }) {
            return el(RichTextToolbarButton, {
                icon: 'edit',
                title: __('Espace insécable', 'textdomain'),
                onClick: () => {
                    onChange(insert(value, '\u00A0'));
                },
            });
        },
    });
})(window.wp);
