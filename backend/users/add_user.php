<?php
require_once __DIR__ . '/../rest/services/UserService.class.php';

$payload = $_REQUEST;

$user_service = new UserService();

if($payload['user_id'] != NULL && $payload['user_id'] != ''){
  $user = $user_service->edit_user($payload);
} else {
  unset($payload['user_id']);
  $user = $user_service->add_user($payload);
}
echo json_encode(['message'=> "you have successfully added the user", 'data'=> $user]);