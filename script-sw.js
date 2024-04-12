function changeLanguage() {
    var currentLanguage = '<?php echo $currentLanguage; ?>';
    var otherLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    var button = document.querySelector('.js-change-language');
    button.textContent = otherLanguage.toUpperCase();
    button.dataset.language = otherLanguage;
}
