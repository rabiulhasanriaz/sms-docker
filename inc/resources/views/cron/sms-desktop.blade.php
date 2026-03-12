<!DOCTYPE html>
<html>
<head>
    <title>Cron</title>
    <meta http-equiv="refresh" content="5">
</head>
<body>

<h2 style="text-align: center;">Message Sending .... </h2>

<span>This page is refreshing 30 seconds to send SMS.<b style="color: red;">Dont close it.</b></span>
<p>----------------------------------</p>
<p>
    @if(is_array(@$retText))
        @foreach($retText as $text)
            {{ $text }}
        @endforeach
    @else
        @if(@$retText == "Authentication Failed! Please Contact with Admin/Service Provider!")
            <h1 style="color:red;">{{ @$retText }}</h1>
        @else
            {{ @$retText }}
        @endif
    @endif
</p>
</body>
</html>
