<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="pictures/icon.png">

    <link rel="stylesheet" type="text/css" href="css/slick-1.8.1.css">
    <link rel="stylesheet" type="text/css" href="css/menubar.css">
    <link rel="stylesheet" type="text/css" href="css/structure.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" type="text/css" href="css/arcade.css">
    <link rel="stylesheet" type="text/css" href="css/members.css">
    <link rel="stylesheet" type="text/css" href="css/model.css">

    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/jquery.waypoints-2.0.3.min.js"></script>
    <script type="text/javascript" src="js/jquery.counterup-1.0.0.min.js"></script>
    <script type="text/javascript" src="js/slick-1.8.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

    <title>SPACE WARP</title>
</head>
<body>

<div id="menubar">
    <div class="logo link" onclick="javascript: load('home.php', '#content');">SPACE <p>WARP</p></div>

    <div class="menu">
        <div class="link" onclick="javascript: load('home.php', '#content');">HOME</div>
        <div class="link" onclick="javascript: load('arcade.php', '#content');">ARCADE</div>
        <div class="link" onclick="javascript: load('members.php', '#content');">MEMBERS</div>
        <div class="link" onclick="javascript: load('model.php', '#content');">3D MODEL</div>
    </div>
</div>

<div id="content"></div>

<div id="resolutionFixAlert">
    <div class="infographic">
        <img class="image" src="pictures/ResolutionSpaceWarp-01.png" alt="ResolutionSpaceWarp">
        <img class="button" src="pictures/button.png" alt="Button" onclick="javascript: resolutionFixAlertClose();">
    </div>
</div>

</body>

</html>
