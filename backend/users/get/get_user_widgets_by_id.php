<?php
require_once __DIR__ . '/../../rest/services/UserService.class.php';

$payload = $_REQUEST;

$user_service = new UserService();
//post TODO
$user_service->edit_user_widgets($payload);
