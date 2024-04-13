<?php
require_once __DIR__ . '/rest/services/itemService.class.php';

$payload = $_REQUEST;

$item_service = new itemService();

if($payload['id'] != NULL && $payload['id'] != ''){
  unset($payload['id']);
  $item = $item_service->edit_item($payload);
} else {
  $item = $item_service->add_item($payload);
}
echo json_encode(['message'=> "you have successfully added the item", 'data'=> $item]);