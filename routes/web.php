<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Public portfolio (React page: resources/js/Pages/Portfolio.jsx)
Route::get('/', PortfolioController::class)->name('home');

Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');

// CRUD for the Projects section: index, create, store, edit, update, destroy
// (no "show" page, so it is excluded)
Route::resource('projects', ProjectController::class)->except(['show']);
