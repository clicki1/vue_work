<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Servises\StaticFactory;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->all();
        $result = StaticFactory::save('database');
        return $result->create($data);

    }
}
