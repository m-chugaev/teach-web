<?php
session_start();
require_once '../classes/LanguageManager.php';

$languageManager = new LanguageManager();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $language = $_POST['language'];
    $languageManager->setLanguage($language);
    echo json_encode(['success' => true, 'language' => $languageManager->getCurrentLanguage()]);
} else {
    echo json_encode(['language' => $languageManager->getCurrentLanguage()]);
}
