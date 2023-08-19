<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        sleep(1);

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = $request->user();

            return response()->json([
                'error' => false,
                'message' => null,
                'user' => $user,
                'token' => $user->createToken('login')->plainTextToken,
            ]);
        }

        return response()->json([
            'error' => true,
            'message' => 'The provided credentials do not match our records.',
            'data' => null
        ]);
    }

    public function logout(Request $request): JsonResponse|RedirectResponse
    {
        $request->user()->tokens()->delete();

        if (!$request->isXmlHttpRequest()) {
            return redirect('login');
        }

        return response()->json([
            'error' => false,
            'message' => 'Logout successfully.'
        ]);
    }
}
