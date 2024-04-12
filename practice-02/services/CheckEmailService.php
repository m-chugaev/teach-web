<?php

include_once 'RenderResultTrait.php';

class CheckEmailService
{
    use RenderResultTrait;

    private const SESSION_KEY = 'email_valid';

    public function checkEmail()
    {
        $email = $_POST["email"];
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "Контакт сохранен"; //Не понимаю, тут нужно вернуть &email с чем-то или как?
        } else {
            return "Ошибка валидации email"; //Не понимаю, тут нужно вернуть &email с чем-то или как?
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