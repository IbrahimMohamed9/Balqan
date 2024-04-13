<?php
require_once __DIR__ . '/rest/services/itemService.class.php';

$item_id = $_REQUEST['item_id'];

$item_service = new itemService();
$item = $item_service->delete_item($item_id);

echo json_encode($item);
