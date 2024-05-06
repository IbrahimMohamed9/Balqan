<?php
require_once __DIR__ . '/../../rest/services/UserService.class.php';

$payload = $_REQUEST;

$user_service = new UserService();

$user_service->add_user_draft($payload);
