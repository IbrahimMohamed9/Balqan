<?php
require_once __DIR__ . '/rest/services/ArticleService.class.php';

$payload = $_REQUEST;

$article_service = new ArticleService();

$category = $payload['category'];

$data = $article_service->get_articles_by_category($category);

echo json_encode($data);
