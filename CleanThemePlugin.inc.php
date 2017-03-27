<?php
import('lib.pkp.classes.plugins.ThemePlugin');
class CleanThemePlugin extends ThemePlugin {

    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        // Load our custom CSS stylesheet
        $this->addStyle('stylesheet', 'styles/style.css');

        // Load jQuery from a local copy.
        // Based on the default theme
        $min = Config::getVar('general', 'enable_minified') ? '.min' : '';
        $request = Application::getRequest();
        // Use OJS's built-in jQuery files
        $jquery = $request->getBaseUrl() . '/lib/pkp/lib/components/jquery/jquery' . $min . '.js';
        $jqueryUI = $request->getBaseUrl() . '/lib/pkp/lib/components/jquery-ui/jquery-ui' . $min . '.js';

        // Use an empty `baseUrl` argument to prevent the theme from looking for
        // the files within the theme directory
        $this->addScript('jQuery', $jquery, array('baseUrl' => ''));
        $this->addScript('jQueryUI', $jqueryUI, array('baseUrl' => ''));
        $this->addScript('jQueryTagIt', $request->getBaseUrl() . '/lib/pkp/js/lib/jquery/plugins/jquery.tag-it.js', array('baseUrl' => ''));

        // Load custom JavaScript for this theme
        $this->addScript('okayNav', 'js/vendor/jquery.okayNav-min.js');
        $this->addScript('global', 'js/script.js');
        $this->addScript('default', 'js/main.js');
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