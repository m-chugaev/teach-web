<?php
require_once '../services/LanguageManager.php';

$languageManager = new LanguageManager();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $language = $_POST['language'];
    $languageManager->setLanguage($language);
    $languageManager->renderResult(['success' => true, 'language' => $languageManager->getCurrentLanguage()]);
} else {
    $languageManager->renderResult(['language' => $languageManager->getCurrentLanguage()]);
}
