<?php

namespace App\Http\Controllers;

use GoogleMaps\GoogleMaps;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function getRestaurants(Request $request)
    {
        $searchParam = $request->input('search', 'Bang sue');

        $search = $searchParam ? $searchParam.' restaurant' : 'Bang sue restaurant';

        // if existing in cache, so using data in cache
        if (Cache::has($search)) {
            return response()->json(['data' => Cache::get($search)]);
        }

        $gMap = new GoogleMaps();
        $place = $gMap->load('placequeryautocomplete')
            ->setParamByKey('input', $search)
            ->setParamByKey('language', 'th')
            ->getResponseByKey('predictions');

        // store result into cache
        Cache::put($search, $place['predictions']);


        return response()->json(['data' => $place['predictions']]);
    }

    public function getPlaceDetail(Request $request, string $placeId)
    {
        if (Cache::has($placeId)) {
            return response()->json(['data' => Cache::get($placeId)]);
        }

        $gMap = new GoogleMaps();
        $detail = $gMap->load('placedetails')
            ->setParamByKey('placeid', $placeId)
            ->getResponseByKey('result');

        Cache::put($placeId, $detail);

        return response()->json(['data' => $detail]);
    }
}
