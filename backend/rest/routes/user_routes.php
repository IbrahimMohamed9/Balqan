<?php
require_once __DIR__ . '/../services/UserService.class.php';

Flight::set('user_service', new UserService());

Flight::group("/users", function () {
  Flight::group("/get", function () {
    Flight::route('GET /', function () {
      $users = Flight::get('user_service')->get_users();

      Flight::json($users);
    });

    //test it
    Flight::route('GET /requests/@user_id', function ($user_id) {
      $requests = Flight::get('user_service')->get_friend_requests($user_id);

      Flight::json($requests);
    });

    Flight::route('GET /activity/@user_id', function ($user_id) {
      $activity = Flight::get('user_service')->get_user_activity($user_id);

      Flight::json($activity);
    });

    Flight::route('GET /user/@user_id', function ($user_id) {
      $user = Flight::get('user_service')->get_user_by_id($user_id);

      Flight::json($user);
    });

    //test it
    Flight::route('GET /friends/@user_id', function ($user_id) {
      $friends = Flight::get('user_service')->get_friends($user_id);

      Flight::json($friends);
    });

    Flight::route('GET /draft/@draft_id', function ($draft_id) {
      $draft = Flight::get('user_service')->get_user_draft_by_id($draft_id);

      Flight::json($draft);
    });

    Flight::route('GET /drafts/@user_id', function ($user_id) {
      $drafts = Flight::get('user_service')->get_user_drafts($user_id);

      Flight::json($drafts);
    });

    Flight::route(
      'GET /latest_activity/@user_id/@limit',
      function ($user_id, $limit) {

        $latest_activity =
          Flight::get('user_service')
          ->get_user_latest_activity($user_id, $limit);

        Flight::json($latest_activity);
      }
    );

    Flight::route('GET /targets/@user_id', function ($user_id) {
      $targets = Flight::get('user_service')->get_user_targets($user_id);

      Flight::json($targets);
    });

    Flight::route('GET /tickets/@user_id', function ($user_id) {
      $tickets = Flight::get('user_service')->get_user_tickets($user_id);

      Flight::json($tickets);
    });

    Flight::route('GET /widgets/@user_id', function ($user_id) {
      $widgets = Flight::get('user_service')->get_user_widgets_by_id($user_id);

      Flight::json($widgets);
    });
  });

  Flight::group("/edit", function () {
    Flight::route('PUT /widgets', function () {
      $payload = Flight::request()->query;

      Flight::get('user_service')->edit_user_widgets($payload);

      Flight::json(
        ['message' => "you have successfully edit the widgets"]
      );
    });

    Flight::route('POST /user', function () {
      $payload = Flight::request()->data;

      $info = [
        'name' => $payload['name'],
        'phone' => $payload['phone'],
        'user_id' => Flight::request()->query['user_id']
      ];

      Flight::get('user_service')->edit_user_info($info);

      Flight::json(
        [
          'message' => "you have successfully edit the info",
          'data' => $info
        ]
      );
    });

    Flight::route('POST /password', function () {
      $payload = Flight::request()->data;

      Flight::get('user_service')->edit_user_password($payload);
    });

    Flight::route('POST /draft', function () {
      $payload = Flight::request()->data;

      Flight::get('user_service')->edit_user_password($payload);
    });

    //test it
    Flight::route('PUT /request', function () {
      $payload = Flight::request()->query;

      Flight::get('user_service')->editFriendRequestStatus($payload);
    });
  });

  Flight::group("/delete", function () {
    //done
    Flight::route('DELETE /draft/@draft_id', function ($draft_id) {
      if (!$draft_id) {
        Flight::halt(500, "Try again later");
      }
      Flight::get('user_service')->delete_user_draft($draft_id);
    });

    Flight::route('DELETE /friend/@friendship_id', function ($friendship_id) {
      if (!$friendship_id) {
        Flight::halt(500, "Try again later");
      }
      Flight::get('user_service')->delete_friend($friendship_id);
    });

    Flight::route('DELETE /user/@user_id', function ($user_id) {
      if (!$user_id) {
        Flight::halt(500, "Try again later");
      }
      Flight::get('user_service')->delete_user($user_id);
    });
  });

  Flight::group("/add", function () {
    //done
    Flight::route('POST /draft', function () {
      $payload = Flight::request()->data;

      $draft = [
        'title' => $payload['title'],
        'content' => $payload['content'],
        'user_id' => Flight::request()->query['user_id']
      ];


      Flight::get('user_service')->add_user_draft($draft);

      Flight::json(
        ['message' => "you have successfully added the draft"]
      );
    });
  });
});
