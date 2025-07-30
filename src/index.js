// (function (wp) {
//     const { registerFormatType, insert } = wp.richText;
//     const { RichTextToolbarButton } = wp.blockEditor;
//     const { __ } = wp.i18n;
//     const el = wp.element.createElement;
//
//     registerFormatType('frvaillant/nbsp-inserter', {
//         title: __('Espace insécable', 'frv-nbsp'),
//         tagName: 'bold',
//         className: null,
//         edit({ value, onChange }) {
//             return el(RichTextToolbarButton, {
//                 icon: 'edit',
//                 title: __('Espace insécable', 'frv-nbsp'),
//                 onClick: () => {
//                     onChange(insert(value, '\u00A0'));
//                 },
//             });
//         },
//     });
// })(window.wp);

import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { registerFormatType, insert } from "@wordpress/rich-text";

const NonBreakableSpacesButtons = ({ isActive, onChange, value }) => {
    return (
      <RichTextToolbarButton
        icon="edit"
        title={__('Espace insécable', 'frv-nbsp')}
        onClick={() => {
            onChange(insert(value, '\u00A0'));
        }}
        isActive={isActive}
      />
    );
};

registerFormatType("frvaillant/nbsp-inserter", {
    title: __('Espaces insécables', 'frv-nbsp'),
    tagName: 'bold',
    className: null,
    edit: NonBreakableSpacesButtons,
});
