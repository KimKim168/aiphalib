<?php

use App\Models\Banner;
use App\Models\Heading;
use App\Models\Item;
use App\Models\ItemCategory;
use App\Models\Post;
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
        ->with('images')
        ->limit(6) // eager load
        ->get();
    $ourClients = Item::where('category_code', 'OUR_CLIENTS')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    $ourBlogs = Post::where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    // return ($ourBlogs);
    return Inertia::render('Aiphalib/home/Index', [
        'slides' => $slides,
        'heading' => $headingSlide,
        'headingServices' => $headingServices,
        'headingClient' => $headingClient,
        'headingBlog' => $headingBlog,
        'heroSection' => $heroSection,
        'allDataServices' => $allDataServices,
        'ourClients' => $ourClients,
        'ourBlogs' => $ourBlogs,

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

Route::get('/blogs', function () {
    $headingBlog = Heading::where('code', 'BLOGS')->where('status', 'active')->first();
   $allDataBlogs = Post::where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    return Inertia::render('Aiphalib/blogs/Index',[
        'allDataBlogs' => $allDataBlogs,
        'headingBlog' => $headingBlog,
    ]);
});

Route::get('/blogs/{id}', function ($id) {
    $blog = Post::find($id);
    $relatedBlogs = Post::where('id', '!=', $id)->orderBy('id', 'desc')->with('images')->limit(6)->get();
    // return ($relatedBlogs);
    return Inertia::render('Aiphalib/blogs/Show', [
        'blog' => $blog,
        'relatedBlogs' => $relatedBlogs,
    ]);
});

Route::get('/support', function () {
    $headingContact = Heading::where('code', 'CONTACT')->where('status', 'active')->first();
    $support = ItemCategory::where('code', 'SUPPORT')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->first();
    $dataSupport = Item::where('category_code', 'SUPPORT')
        ->where('status', 'active')
        ->orderBy('id', 'desc')
        ->with('images') // eager load
        ->get();
    // return ($dataSupport);

    return Inertia::render('Aiphalib/support/Index', [
        'headingContact' => $headingContact,
        'support' => $support,
        'dataSupport' => $dataSupport,
    ]);
});
