<?php

include_once 'RenderResultTrait.php';

class CheckEmailService
{
    use RenderResultTrait;

    private const SESSION_KEY = 'email';

    public function checkEmail()
    {
        $email = 'email';
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "Контакт сохранен"; 
        } else {
            return "Ошибка валидации email";
        }
    }
    public function getRequestsHistory(): string
    {
        return $_SESSION[self::SESSION_KEY] ?? "";
    }

    public function saveRequest(): void
    {
        $current = $this->getRequestsHistory();
        $current = "";
        $_SESSION[self::SESSION_KEY] = $current;
    }
}
?>