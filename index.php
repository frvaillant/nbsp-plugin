<?php
/**
 * Plugin Name: Non-breaking space inserter
 * Description: Add a small caps formatting option in editor.
 * Author:      François Vaillant
 * Author URI:  https://frvaillant.fr
 * Text Domain: frv-nbsp
 */

function my_custom_gutenberg_button() {
    wp_enqueue_script(
        'custom-toolbar-button',
        plugin_dir_url( __FILE__ ) . 'src/js/custom-toolbar-button.js',
        array('wp-rich-text', 'wp-element', 'wp-i18n', 'wp-block-editor', 'wp-components'),
        filemtime(__DIR__ . '/src/js/custom-toolbar-button.js')
    );
}
add_action('enqueue_block_editor_assets', 'my_custom_gutenberg_button');

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('dashicons');
});