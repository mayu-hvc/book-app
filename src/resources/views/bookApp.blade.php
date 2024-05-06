<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Book App</title>

    @vite('resources/css/app.css')

</head>
<body class="dark:bg-gray-600">
    <div id="app"></div>
</body>

@vite('resources/js/bookApp.ts')

</html>
