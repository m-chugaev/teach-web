<?php
require_once '../../services/LanguageManager.php';
$languageSwitcher = new LanguageManager();
$currentLanguage = $languageSwitcher->getCurrentLanguage();
$otherLanguage = $currentLanguage === 'ru' ? 'en' : 'ru';
?>

<div class="language-switcher fixed-bottom">
    <button class="js-change-language" data-language="' . $otherLanguage . '">' . strtoupper($otherLanguage) . '</button>
</div>
