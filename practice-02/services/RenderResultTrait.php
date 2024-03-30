<?php

/**
 * Трейт для отображения результатов api запроса
 */
trait RenderResultTrait
{
    public function renderResult(mixed $result): void
    {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }
}