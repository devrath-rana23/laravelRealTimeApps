<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view("welcome");
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/users', function () {
    return view("users.showAll");
});

Route::get('/game', function () {
    return view("game.show");
});

Route::get('/chat', [App\Http\Controllers\ChatController::class, 'showChat'])->name('chat.show');
Route::post('/chat/message', [App\Http\Controllers\ChatController::class, 'messageReceived'])->name('chat.message');
