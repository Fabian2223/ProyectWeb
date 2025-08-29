<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Component;

class ComponentController extends Controller
{
    public function store(Request $request)
    {
        $component = new Component();
        $component->name = $request->name;
        $component->kind = $request->kind;
        $component->purpose = $request->purpose;
        $component->save();

        return response()->json($component, 201);
    }
}
