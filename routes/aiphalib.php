<?php

use App\Models\Banner;
use App\Models\Heading;
use App\Models\Item;
use App\Models\ItemCategory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $slides = Banner::where('position_code', 'HOME_SLIDE')->orderBy('id', 'desc')->where('status', 'active')->with('images')->get();
    $headingSlide = Heading::where('code', 'HOME_SLIDE')->where('status', 'active')->first();
    $headingServices = Heading::where('code', 'SERVICES_WE_PROVIDE')->where('status', 'active')->first();
    $headingClient = Heading::where('code', 'OUR_CLIENTS')->where('status', 'active')->first();
    $headingBlog = Heading::where('code', 'BLOGS')->where('status', 'active')->first();
    $heroSection = Item::where('category_code', 'ABOUT')->where('status', 'active')->with('images')->first();
    $allDataServices = Item::where('category_code', 'SERVICES')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    $ourClients = Item::where('category_code', 'OUR_CLIENTS')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    // return ($headingServices);
    return Inertia::render('Aiphalib/home/Index', [
        'slides' => $slides,
        'heading' => $headingSlide,
        'headingServices' => $headingServices,
        'headingClient' => $headingClient,
        'headingBlog' => $headingBlog,
        'heroSection' => $heroSection,
        'allDataServices' => $allDataServices,
        'ourClients' => $ourClients,

    ]);
});

Route::get('/about', function () {
    $heroSection = Item::where('category_code', 'ABOUT')->where('status', 'active')->with('images')->first();
    // return ($heroSection);
    return Inertia::render('Aiphalib/about/Index', [
        'heroSection' => $heroSection,
    ]);
});

Route::get('/about/{id}', function () {
    $heroSection = Item::where('category_code', 'ABOUT')->where('status', 'active')->with('images')->first();
    return Inertia::render('Aiphalib/about/Show', [
        'heroSection' => $heroSection,
    ]);
});

Route::get('/services', function () {
    $headingServices = Heading::where('code', 'SERVICES_WE_PROVIDE')->where('status', 'active')->first();
    $allDataServices = Item::where('category_code', 'SERVICES')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    // return ($allDataServices);
    return Inertia::render('Aiphalib/service/Index', [
        'headingServices' => $headingServices,
        'allDataServices' => $allDataServices,
    ]);
});

Route::get('/services/{id}', function ($id) {
    $service = Item::find($id);
    $relatedServices = Item::with('category', 'images')->where('id', '!=', $id)->where('category_code', $service->category_code)->orderBy('id', 'desc')->limit(6)->get();
    // return ($relatedServices);
    return Inertia::render('Aiphalib/service/Show', [
        'service' => $service,
        'relatedServices' => $relatedServices,
    ]);
});

Route::get('/products', function () {
    $headingProduct = Heading::where('code', 'OUR_PRODUCTS')->where('status', 'active')->first();
    $allDataProducts = Item::where('category_code', 'PRODUCTS')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    return Inertia::render('Aiphalib/products/Index', [
        'headingProduct' => $headingProduct,
        'allDataProducts' => $allDataProducts,
    ]);
});

Route::get('/products/{id}', function ($id) {
    $product = Item::find($id);
    $relatedProducts = Item::with('category', 'images')->where('id', '!=', $id)->where('category_code', $product->category_code)->orderBy('id', 'desc')->limit(6)->get();
    return Inertia::render('Aiphalib/products/Show', [
        'product' => $product,
        'relatedProducts' => $relatedProducts,
    ]);
});

Route::get('/blogs/{id}', function () {
    return Inertia::render('Aiphalib/blogs/Show');
});

Route::get('/support', function () {
    $headingContact = Heading::where('code', 'CONTACT')->where('status', 'active')->first();
    $support = ItemCategory::where('code', 'SUPPORT')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->first();
        // return ($support);
    // $support = Item::where('category_code', 'SUPPORT')
    //     ->where('status', 'active')
    //     ->orderBy('id', 'desc')
    //     ->with('images') // eager load
    //     ->get();
    return Inertia::render('Aiphalib/support/Index', [
        'headingContact' => $headingContact,
        'support' => $support,
    ]);
});
