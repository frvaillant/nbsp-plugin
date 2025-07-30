<?php
/**
 * Plugin Name: Non-breaking space inserter
 * Description: Add a small caps formatting option in editor.
 * Author:      François Vaillant
 * Author URI:  https://frvaillant.fr
 * Text Domain: frv-nbsp
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

add_action('enqueue_block_editor_assets', function() {
	wp_enqueue_style('dashicons');
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
	wp_enqueue_script(
		'frv-nbsp-toolbar-button',
		plugins_url('build/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);
});