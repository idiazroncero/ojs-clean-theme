<?php
import('lib.pkp.classes.plugins.ThemePlugin');
class CleanThemePlugin extends ThemePlugin {

    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        $this->addStyle('stylesheet', 'styles/style.css');
    }

    /**
     * Get the display name of this theme
     * @return string
     */
    function getDisplayName() {
        return __('plugins.themes.clean.name');
        //return "Clean";
    }

    /**
     * Get the description of this plugin
     * @return string
     */
    function getDescription() {
        return __('plugins.themes.clean.description');
        //return "Clean Description";
    }
}