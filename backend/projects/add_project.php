<?php
require_once __DIR__ . '/../rest/services/ProjectsService.class.php';

$payload = $_REQUEST;

$projects_service = new ProjectsService();

if($payload['projects_id'] != NULL && $payload['projects_id'] != ''){
    $projects = $projects_service->edit_projects($payload);
} else {
    $projects = $projects_service->add_project($payload);
}
echo json_encode(['message'=> "you have successfully added the projects", 'data'=> $projects]);