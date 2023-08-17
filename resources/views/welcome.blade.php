<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        @vite('resources/scss/app.scss')
    </head>
    <body class="antialiased">
        <div id="app">
            <app-component />
        </div>

        @vite('resources/js/app.js')
    </body>
</html>
