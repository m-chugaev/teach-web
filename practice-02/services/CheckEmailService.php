<?php

include_once 'RenderResultTrait.php';

class CheckEmailService
{
    use RenderResultTrait;

    private const SESSION_KEY = 'email';

    private string $email;

    public function __construct(string $email = '') {
        $this->email = $email;
    }

    public function checkEmail(): string
    {
        if (filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return "Контакт сохранен"; 
        } else {
            return "Ошибка валидации email";
        }
    }

    public function getLatest(): string
    {
        return $_SESSION[self::SESSION_KEY] ?? "";
    }

    public function save(): void
    {
        $_SESSION[self::SESSION_KEY] = $this->email;
    }
}
?>