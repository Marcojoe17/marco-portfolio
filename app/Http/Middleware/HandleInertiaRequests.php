<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    // Props available on EVERY page via usePage().props
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth'  => ['user' => $request->user()],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'status'  => fn () => $request->session()->get('status'),
            ],
        ];
    }
}
