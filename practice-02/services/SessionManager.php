<?php

/**
 * Сервис для управления сессией
 */
class SessionManager
{
    public static function safeStart(): void
    {
        !@\session_start();
    }
}