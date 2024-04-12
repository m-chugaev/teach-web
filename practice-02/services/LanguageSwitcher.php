<?php
require_once 'LanguageManager.php';

class LanguageSwitcher
{
    private $languageManager;

    public function __construct()
    {
        $this->languageManager = new LanguageManager();
    }

    public function render()
    {

        return '
        ';
    }
}
