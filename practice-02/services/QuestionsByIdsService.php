<?php

include_once 'RenderResultTrait.php';
include_once 'QuestionsService.php';

class QuestionsByIdsService {
    use RenderResultTrait;

    public function getQuestionsByIds(array $ids): array
    {
        $all = (new QuestionsService)->getQuestions();

        $questions = [];
        $missingIds = [];

        foreach ($ids as $id) {
            $index = $id - 1;

            if (isset($all[$index])) {
                $questions[] = $all[$index];
            } else {
                $missingIds[] = $id;
            }
        }

        return [
            'questions' => $questions,
            'missing_ids' => $missingIds,
        ];
    }

    public function validateQuery(mixed $params): mixed
    {
        $idsParam = isset($params['ids']) ? $params['ids'] : '';

        if (empty($idsParam)) {
            return ['error' => 'Идентификаторы не найдены'];
        }

        $ids = array_map('intval', explode(',', $idsParam));

        foreach ($ids as $id) {
            if ($id <= 0) {
                return ['error' => 'Идентификаторы должны быть положительными числами'];
            }
        }

        return [
            'success' => true,
            'ids' => $ids
        ];
    }
    
}