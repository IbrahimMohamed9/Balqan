<?php
require_once __DIR__ . '/../services/itemService.class.php';

Flight::set('item_service', new ItemService());

Flight::group("/items", function () {
  Flight::route('POST /add', function () {
    $payload = Flight::request()->data;

    if ($payload['item_id'] != NULL && $payload['item_id'] != '') {
      Flight::get('item_service')->edit_item($payload);
    } else {
      Flight::get('item_service')->add_item($payload);
    }

    Flight::json(
      [
        'message' => "you have successfully added the item"
      ]
    );
  });

  Flight::route('GET /@category', function ($category) {
    if (empty($category)) {
      Flight::halt(500, "Try again later");
    }

    $data = Flight::get('item_service')->get_items_by_category($category);
    Flight::json($data);
  });

  Flight::route('GET /', function () {
    $data = Flight::get('item_service')->get_items();
    Flight::json($data);
  });

  Flight::route('GET /get/@item_id', function ($item_id) {
    $item = Flight::get('item_service')->get_item_by_id($item_id);

    Flight::json(
      [
        'message' => "Item got successful",
        'data' => $item
      ]
    );
  });

  Flight::route('GET /new_packages/@limit', function ($limit) {
    //TODO fix this
    $data = Flight::get('item_service')->get_new_packages(
      [
        'category' => 'package',
        'limit' => 2
      ]
    );

    Flight::json($data);
  });

  Flight::route('DELETE /delete/@item_id', function ($item_id) {
    if (!$item_id) {
      Flight::halt(500, "Try again later");
    }
    Flight::get('item_service')->delete_item($item_id);
  });
});

/**
 * @OA\Schema(
 *     schema="Item",
 *     @OA\Property(property="name", type="string", example="14 day package"),
 *     @OA\Property(property="description", type="string", example="14 day in Bosina"),
 *     @OA\Property(property="day_price", type="number", example=null),
 *     @OA\Property(property="person_price", type="number", example="23"),
 *     @OA\Property(property="stock_quantity", type="integer", example="2"),
 *     @OA\Property(property="imgs_srcs", type="string", example="Some image url"),
 *     @OA\Property(property="min_days", type="integer", example=null),
 *     @OA\Property(property="days", type="integer", example="14"),
 *     @OA\Property(property="max_days", type="integer", example=null),
 *     @OA\Property(property="min_persons", type="string", example="5"),
 *     @OA\Property(property="persons", type="string", example=null),
 *     @OA\Property(property="max_persons", type="string", example="9"),
 *     @OA\Property(property="category", type="string", example="package"),
 *     @OA\Property(property="title", type="string", example="Some item title"),
 *     @OA\Property(property="intro", type="string", example="Some item intro"),
 *     @OA\Property(property="status", type="string", example="available")
 * )
 */
