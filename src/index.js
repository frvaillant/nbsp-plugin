import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { registerFormatType, insert } from "@wordpress/rich-text";

const NonBreakableSpacesButtons = ({ isActive, onChange, value }) => {
    return (
      <>
        <RichTextToolbarButton
          icon="edit"
          title={__('Espace insécable', 'frv-nbsp')}
          onClick={() => {
              onChange(insert(value, '\u00A0'));
          }}
          isActive={isActive}
        />
        <RichTextToolbarButton
          icon="edit"
          title={__('Espace insécable (fine)', 'frv-nbsp')}
          onClick={() => {
              onChange(insert(value, '\u202F'));
          }}
          isActive={isActive}
        />
        <RichTextToolbarButton
          icon="edit"
          title={__('Espace insécable (cadratin)', 'frv-nbsp')}
          onClick={() => {
            onChange(insert(value, '\u2002'));
          }}
          isActive={isActive}
        />
      </>
    );
};

registerFormatType("frvaillant/nbsp-inserter", {
    title: __('Espaces insécables', 'frv-nbsp'),
    tagName: 'bold',
    className: null,
    edit: NonBreakableSpacesButtons,
});
