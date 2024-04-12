<?php
require_once __DIR__ . '/rest/services/itemService.class.php';

$payload = $_REQUEST;

$item_service = new itemService();
$item = $item_service->add_item($payload);

echo json_encode(['message'=> "you have successfully added the item", 'data'=> $item]);