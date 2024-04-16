<?php
require_once __DIR__ . '/rest/services/ArticleService.class.php';

$payload = $_REQUEST;

$article_service = new ArticleService();

$data = $article_service->get_articles();

$test['data']= $data[0]['article_id'];
//unset($data[0]['img_desc']);
//print_r($data);

echo json_encode($data);
