<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Portfolio', [
            // static content still comes from config/portfolio.php; projects now come from the DB
            'portfolio' => Arr::except(config('portfolio'), ['projects']),
            'projects'  => Project::orderBy('display_order')->orderBy('id')->get(),
        ]);
    }
}
