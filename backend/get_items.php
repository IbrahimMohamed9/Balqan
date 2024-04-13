<?php
require_once __DIR__ . '/rest/services/ItemService.class.php';

$payload = $_REQUEST;

$item_service = new ItemService();

if(isset($payload['category'])) {
    $category = $payload['category'];

    $data = $item_service->get_items_by_category($category);

    echo json_encode($data);
} elseif(isset($payload['item_id'])) {
    $item_id = $payload['item_id'];

    $data = $item_service->get_item_by_id($item_id);

    echo json_encode($data);

} else {
    echo json_encode(['error' => 'Category is not set']);
}
