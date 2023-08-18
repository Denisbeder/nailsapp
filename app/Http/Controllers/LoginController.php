<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        sleep(10);

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->user()->tokens()->delete();

            return response()->json([
                'error' => false,
                'message' => null,
                'data' => [
                    'token' => $request->user()->createToken('login')->plainTextToken
                ]
            ]);
        }

        return response()->json([
            'error' => true,
            'message' => 'The provided credentials do not match our records.',
            'data' => null
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'error' => false,
            'message' => 'Logout successfully.'
        ]);
    }
}
