<?php

require_once __DIR__ . '/../services/AuthService.class.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::set('auth_service', new AuthService());

Flight::group('/auth', function () {

  /**
   * @OA\Post(
   *      path="/auth/login",
   *      tags={"auth"},
   *      summary="Login to system",
   *      @OA\Response(
   *           response=200,
   *           description="User data and JWT token"
   *      ),
   *      @OA\RequestBody(
   *          description="User credentials",
   *          @OA\JsonContent(
   *             required={"email", "password"},
   *             @OA\Property(property="email", required=true, type="string", example="becir.isakovic@ibu.edu.ba"),
   *             @OA\Property(property="password", required=true, type="string", example="pass")
   *           )
   *      ),
   * )
   */
  Flight::route('POST /login', function () {
    $payload = Flight::request()->data->getData();
    $user = Flight::get('auth_service')->get_user_by_email($payload['email']);

    if (!$user || $payload['password'] !== $user['password'])
      Flight::halt(500, "Invalid username or password");

    unset($user['password']);
    $payload = [
      'user' => $user,
      'iat' => time(),
      'exp' => time() + 1296000 //valid for 15 day
    ];

    $token = JWT::encode(
      $payload,
      JWT_SECRET,
      'HS256'
    );

    Flight::json([
      'user' => array_merge($user, ['token' => $token])
    ]);
  });

  /**
   * @OA\Post(
   *      path="/auth/logout",
   *      tags={"auth"},
   *      summary="Logout from system",
   *      security={
   *          {"ApiKey": {}}
   *      },
   *      @OA\Response(
   *           response=200,
   *           description="Success response or 'Try again please' "
   *      ),
   * )
   */
  Flight::route('POST /logout', function () {
    try {
      $token = Flight::request()->getHeader('Authentication');
      if ($token) {
        $decoded_token = JWT::decode($token, new Key(JWT_SECRET, 'HS256'));
        Flight::json([
          'jwt_decoded' => $decoded_token,
          'user' => $decoded_token->user
        ]);
      }
    } catch (\Exception $e) {
      Flight::halt(401, 'Try again please');
    }
  });
});
