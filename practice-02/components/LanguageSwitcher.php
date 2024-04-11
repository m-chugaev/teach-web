<?php
require_once '../classes/LanguageManager.php';

class LanguageSwitcher
{
    private $languageManager;

    public function __construct()
    {
        $this->languageManager = new LanguageManager();
    }

    public function render()
    {
        $currentLanguage = $this->languageManager->getCurrentLanguage();
        $otherLanguage = $currentLanguage === 'ru' ? 'en' : 'ru';

        return '
            <div class="language-switcher fixed-bottom">
                <button class="js-change-language" data-language="' . $otherLanguage . '">' . strtoupper($otherLanguage) . '</button>
            </div>
        ';
    }
}
