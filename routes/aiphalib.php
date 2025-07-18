<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Aiphalib/home/Index');
});

Route::get('/about', function () {
    return Inertia::render('Aiphalib/about/Index');
});

Route::get('/about/{id}', function () {
    return Inertia::render('Aiphalib/about/Show');
});

Route::get('/services', function () {
    return Inertia::render('Aiphalib/service/Index');
});

Route::get('/services/{id}', function () {
    return Inertia::render('Aiphalib/service/Show');
});

Route::get('/products', function () {
    return Inertia::render('Aiphalib/products/Index');
});

Route::get('/products/{id}', function () {
    return Inertia::render('Aiphalib/products/Show');
});

Route::get('/blogs/{id}', function () {
    return Inertia::render('Aiphalib/blogs/Show');
});

Route::get('/support', function () {
    return Inertia::render('Aiphalib/support/Index');
});

