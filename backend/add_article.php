<?php
require_once __DIR__ . '/rest/services/articleService.class.php';

$payload = $_REQUEST;

$article_service = new articleService();

if($payload['article_id'] != NULL && $payload['article_id'] != ''){
    $article = $article_service->edit_article($payload);
} else {
    $article = $article_service->add_article($payload);
}
echo json_encode(['message'=> "you have successfully added the article", 'data'=> $article]);